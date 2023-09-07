import React from "react";
import Header from "../componentes/Header";
import "tailwindcss/tailwind.css";
import { useModo } from "../componentes/ModoContext";
import Footer from "../componentes/Footer";

export default function Home() {
  const { modoNocturno } = useModo();
  return (
    <div
      className={`${
        modoNocturno ? "bg-slate-900" : "bg-white"
      } mx-auto 2xl:px-52`}
    >
      <Header />
      <div className="flex justify-center items-center">
        <img
          className="h-screen object-cover"
          src="https://lh3.googleusercontent.com/p/AF1QipPXuYbj2mpGoHNqZWE70_s8WYzqN1StHGMYEMbG=s680-w680-h510"
          alt="primaria"
        />
      </div>
      <div className="grid grid-cols-4 mx-1 md:mx-10">
        <div
          className={`hidden md:block col-span-1 my-20 text-xl border-slate-900 px-4 md:sticky md:top-60 md:left-0 md:bottom-0 md:max-h-screen  rounded   ${
            modoNocturno ? "text-white" : "text-black"
          }`}
        >
          <ul className="space-y-10 font-bold">
            <li className="text-sky-600">Quiénes somos</li>
            <li className="opacity-75 bg-transparent">C.C.T</li>
            <li className="text-sky-600">Oferta Educativa</li>
            <li>Misión</li>
            <li className="text-sky-600">Visión</li>
            <li>Objetivos</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-3 ">
          <h1
            className={`flex items-center justify-start p-4 font-bold text-2xl
          ${modoNocturno ? "text-white" : "text-black"}`}
          >
            Escuela Primaria:
          </h1>
          <h2
            className={`flex items-center justify-start p-4 font-bold
          ${modoNocturno ? "text-white" : "text-black"}`}
          >
            GABRIEL RAMOS MILLÁN
          </h2>
          <div
            className={`mx-4 ${
              modoNocturno ? "text-white" : "text-black"
            } pb-8`}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              ipsum dolorum. Suscipit nesciunt exercitationem sed possimus sint
              reprehenderit praesentium. Aliquam aut voluptatum alias debitis
              deserunt iusto id dolore quisquam esse!
            </p>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptate vero ratione voluptates necessitatibus quia, hic dolorum
              deleniti! Voluptatem laborum a odio unde doloribus omnis vel
              doloremque quasi quis ad? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Adipisci atque exercitationem impedit eius et
              culpa assumenda, error voluptas laudantium magnam eligendi ea
              animi maxime quae, aliquam vel. Consequatur, harum id.
            </p>
          </div>

          <p
            className={`mx-auto flex justify-start p-4 text-xl  font-bold ${
              modoNocturno ? "text-white" : "text-black"
            }`}
          >
            Clave del centro de trabajo
          </p>
          <div
            className={`flex items-center justify-center p-4 font-bold
          ${
            modoNocturno ? "text-white" : "text-black"
          } text-xl flex-row grid grid-cols-1 md:grid-cols-2 pb-16`}
          >
            <div className="col-span-1 col-start-1 m-3 flex justify-center">
              <p className="font-normal">Turno Matutino: 15DPR1043D</p>
            </div>
            <div className="col-span-1 row-start-2 md:col-start-2 md:row-start-1 m-3 flex justify-center">
              <p className="font-normal">Turno Vespertino: 15DPR2144I</p>
            </div>
          </div>
          <h4
            className={`${
              modoNocturno ? "text-white" : " text-black"
            } text-xl flex justify-start items-center p-4 font-bold`}
          >
            Oferta Educativa
          </h4>
          <p className={`${modoNocturno ? "text-white" : " text-black"} mx-4`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            voluptate alias aliquam blanditiis, magnam dolorum nulla, sapiente
            ad, harum magni laudantium odio saepe iste! Eum reiciendis tempora
            eligendi laborum nulla! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta iusto minus doloremque id sapiente,
            excepturi nihil, nobis enim aut earum est corporis reiciendis rerum
            recusandae, quidem ipsum quam magni mollitia!
          </p>
          <p
            className={`${
              modoNocturno ? "text-white" : " text-black"
            } mx-4 mb-10`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            hic animi explicabo aspernatur doloribus nostrum, harum excepturi ex
            dolores maiores perspiciatis eos aperiam quis, architecto reiciendis
            rerum sit unde temporibus!
          </p>
          <h5
            className={`${
              modoNocturno ? "text-white" : " text-black"
            } text-xl flex justify-start p-4 font-bold`}
          >
            Misión
          </h5>
          <p
            className={`${
              modoNocturno ? "text-white" : " text-black"
            } mx-4 mb-10`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium nihil harum neque dolor repellat libero. Rerum ex at
            labore amet earum ipsa inventore quidem assumenda, dicta id quasi
            molestias ducimus!
          </p>
          <h6
            className={`${
              modoNocturno ? "text-white" : " text-black"
            } text-xl flex justify-start p-4 font-bold`}
          >
            Visión
          </h6>
          <p
            className={`${
              modoNocturno ? "text-white" : " text-black"
            } mx-4 mb-10`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sunt
            quo aut, molestias explicabo cum odit laboriosam, facilis,
            cupiditate voluptate at corrupti consequatur accusantium? Nam a id
            adipisci natus voluptate.
          </p>
          <h6
            className={`${
              modoNocturno ? "text-white" : " text-black"
            } text-xl flex justify-start p-4 font-bold`}
          >
            Objetivos
          </h6>
          <ul
            className={`${
              modoNocturno ? "text-white" : "text-black "
            } space-y-10 mx-4`}
          >
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
            <li>
              {" "}
              Objetivo: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Totam labore ipsum aspernatur, vero, debitis quis
              reprehenderit illo molestiae tempora qui obcaecati temporibus
              ratione nam dolorum expedita repellat quae, ea distinctio.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
