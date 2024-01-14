import { getProviders, signIn } from "next-auth/react";
import Header from "@/components/Header";
import "../../app/globals.css";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          src="https://digitactix.com/gilinih/2020/09/instagram_marketing_image.png"
          alt="intagram sign in image"
          className="hidden object-contain rotate-6 md:inline-flex md:w-72"
        />
        <div className="">
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name} className="flex flex-col items-center">
                <img src="https://nesfas.in/wp-content/uploads/2013/11/instagram-logo-2.png" alt="instagram logo" className="w-32 object-cover " />
                <p className="text-sm italic my-10 text-center">This app is created for learning purposes</p>
                <button
                  className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: "/",
                    })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

//Server

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
