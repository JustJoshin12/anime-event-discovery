"use-client";
import { FailedApiComponent } from "../../components/UI/FailedComponent";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { fetchPopularEvents } from "../../store/slices/eventSlice";
import { useMediaQuery } from "react-responsive";
import { Features } from "@/components/UI/DisappearingScrollFeature";
import Skeleton from "@/components/shared/skeleton";
import SkeletonCard from "@/components/shared/skeletonCard";

//Popular Events tablet and up

const PopularEventsSection = () => {
  const dispatch = useDispatch();

  const popularEventsState = useSelector((state) => state.event);
  // const popularEventsState = {
  //   status: "loading",
  //   popularItems: [],
  //   error: null,
  // };
  const { status, popularItems, error } = popularEventsState;

  useEffect(() => {
    dispatch(fetchPopularEvents());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="flex items-center">
          <Skeleton className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-4/5" />
        </div>
        <div>
          <SkeletonCard width="w-full" />
          <SkeletonCard width="w-full" />
          <SkeletonCard width="w-full" />
        </div>
      </div>
    );}
  // } else if (status === "failed") {
  //   return <FailedApiComponent error={error} />;
  // } 

  if (!popularItems || popularItems.length === 0) {
    return <div>No popular events found.</div>;
  }

  return (
    <div className="relative h-fit">
      <Features events={popularItems} />
    </div>
  );
};

export default PopularEventsSection;
