import { useRouter } from "next/router";

const background = "/images/animeScene.jpg";

const Error404Page = () => {
  const router = useRouter();

  return (
    <>
      <main
        className="min-h-screen grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-bold leading-7 text-galactic-primary">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={() => {
                router.push('/home');
              }}
            >
              Go back home
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

  export default Error404Page;