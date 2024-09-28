"use-client";
import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

/**
 * Component for displaying the user's location on the map with a pulsating effect.
 *
 * @param {Object} position - The latitude and longitude of the user's location.
 */
const UserLocationMarker = ({ position }) => (
  <Marker
    position={position}
    icon={{
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    }}
  />
);

/**
 * Component for displaying an event marker on the map.
 *
 * @param {Object} event - The event data.
 * @param {Object} icon - The custom icon for the marker.
 * @param {Function} onClick - Click handler for the marker.
 */
const EventMarker = ({ event, icon, onClick }) => (
  <Marker
    position={{
      lat: event.location.coordinates.latitude,
      lng: event.location.coordinates.longitude,
    }}
    icon={icon}
    title={event.name}
    onClick={() => onClick(event)}
  />
);

/**
 * Component for displaying the information window when an event marker is clicked.
 *
 * @param {Object} event - The selected event data.
 * @param {Function} onCloseClick - Handler for closing the info window.
 */
const EventInfoWindow = ({ event, onCloseClick }) => (
  <InfoWindow
    position={{
      lat: event.location.coordinates.latitude,
      lng: event.location.coordinates.longitude,
    }}
    onCloseClick={onCloseClick}
  >
    <div className="bg-galactic-lightGray p-3 flex flex-col gap-2">
      <h2 className="text-lg font-bold text-galactic-softLavender">{event.name}</h2>
      <p className="text-galactic-accent">{event.description}</p>
      <a
        href={event.website_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Visit Website
      </a>
      <ul className="flex gap-4 text-galactic-complementaryOrange">
        {event?.categories.map((category)=>{
          return(<li key={event.id}>{category}</li>)
        })}
      </ul>
    </div>
  </InfoWindow>
);

/**
 * Helper function to safely retrieve latitude and longitude from a location object.
 *
 * @param {Object} location - The location object from Google Maps.
 * @returns {Object} An object containing the latitude and longitude.
 */
const getLatLng = (location) => {
  if (
    typeof location.lat === "function" &&
    typeof location.lng === "function"
  ) {
    return { lat: location.lat(), lng: location.lng() };
  } else {
    return { lat: location.lat, lng: location.lng };
  }
};

/**
 * Main component for rendering the Google Map with event markers and animations.
 *
 * @param {Array} events - List of event data to display on the map.
 * @param {Object} userLocation - The user's current location.
 * @param {Object} mapContainerStyle - Styles for the map container.
 */
const MapComponent = ({ events, userLocation, mapContainerStyle }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [customIcon, setCustomIcon] = useState(null);
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  // Load the Google Maps script using the API key from environment variables
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBsJN5M5kABg-9OrbVW1-rG6yoCk648cZs", // Ensure your API key is stored securely
  });

  // Initial and target centers for the map animation
  const initialCenter = { lat: 40.7128, lng: -74.006 }; // New York City
  const targetCenter = { lat: 34.0522, lng: -118.2437 }; // Los Angeles

  /**
   * Effect to set up the custom icon after the Google Maps API is loaded.
   */
  useEffect(() => {
    if (isLoaded && window.google) {
      setCustomIcon({
        url: "/images/mapIcons/narutoMapIcon.png", // Path to your custom marker image
        scaledSize: new window.google.maps.Size(70, 70), // Adjust the size as needed
      });
    }
  }, [isLoaded]);

  /**
   * Function to animate the map panning from the current center to a target location.
   *
   * @param {Object} target - The target latitude and longitude.
   * @param {number} duration - Duration of the animation in milliseconds.
   */
  const animatePanTo = (target, duration) => {
    const startTime = performance.now();
    const startCenter = mapRef.current.getCenter();

    const { lat: startLat, lng: startLng } = getLatLng(startCenter);
    const { lat: targetLat, lng: targetLng } = target;

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentLat = startLat + (targetLat - startLat) * progress;
      const currentLng = startLng + (targetLng - startLng) * progress;

      mapRef.current.panTo({ lat: currentLat, lng: currentLng });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  /**
   * Effect to start the map animation after the map is loaded and ready.
   */
  useEffect(() => {
    if (isLoaded && mapReady && mapRef.current && !userLocation) {
      // Only animate if userLocation is not available
      setTimeout(() => {
        animatePanTo(defaultCenter, targetCenter, 5000); // Animate over 5 seconds
      }, 1000);
    }
  }, [isLoaded, mapReady, userLocation]);

  // Handle loading errors
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded || !customIcon)
    return <div className="text-6xl text-galactic-secondary">Loading...</div>;

  // Default center of the map (user location or initial center)
  const defaultCenter = userLocation || initialCenter;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={userLocation}
      onLoad={(map) => {
        mapRef.current = map;
      }}
      onIdle={() => {
        if (!mapReady) {
          setMapReady(true);
        }
      }}
      onClick={() => setSelectedEvent(null)}
    >
      {/* User Location Marker */}
      {userLocation && <UserLocationMarker position={userLocation} />}

      {/* Event Markers */}
      {events.map((event) => (
        <EventMarker
          key={event._id}
          event={event}
          icon={customIcon}
          onClick={setSelectedEvent}
        />
      ))}

      {/* InfoWindow for Selected Event */}
      {selectedEvent && (
        <EventInfoWindow
          event={selectedEvent}
          onCloseClick={() => setSelectedEvent(null)}
        />
      )}
    </GoogleMap>
  );
};

export default MapComponent;
