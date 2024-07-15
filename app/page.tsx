import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <svg
          width="494"
          height="149"
          viewBox="0 0 786 297"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H354.554V297H0V0Z" fill="#F4F4F4" />
          <path d="M354.554 0H786V297H354.554V0Z" fill="black" />
          <path
            d="M9.77386 34.404C16.2892 34.6287 24.8265 34.8533 35.3859 35.078C46.1699 35.3027 56.9539 35.415 67.7379 35.415C78.9712 35.415 89.7552 35.3027 100.09 35.078C110.425 34.8533 117.726 34.741 121.995 34.741C156.144 34.741 181.532 40.9193 198.157 53.276C215.007 65.6327 223.432 81.584 223.432 101.13C223.432 109.218 221.747 117.755 218.377 126.742C215.007 135.504 209.278 143.704 201.19 151.343C193.102 158.757 181.981 164.823 167.827 169.541C153.898 174.259 136.149 176.618 114.581 176.618H78.8589V169.878H111.211C122.669 169.878 131.319 166.845 137.16 160.779C143.226 154.713 147.27 146.737 149.292 136.852C151.539 126.967 152.662 116.295 152.662 104.837C152.662 83.4937 150.191 67.5423 145.248 56.983C140.53 46.4237 132.217 41.144 120.31 41.144C112.671 41.144 107.729 43.0537 105.482 46.873C103.235 50.6923 102.112 58.4433 102.112 70.126V233.908C102.112 243.119 103.011 249.972 104.808 254.465C106.83 258.958 110.537 261.879 115.929 263.227C121.321 264.575 129.184 265.249 139.519 265.249V273C131.88 272.775 121.883 272.551 109.526 272.326C97.1692 272.101 84.0262 271.989 70.0969 271.989C59.7622 271.989 49.4275 272.101 39.0929 272.326C28.7582 272.551 18.9852 272.775 9.77386 273V266.26C16.7385 265.811 21.9059 264.912 25.2759 263.564C28.6459 262.216 30.8925 259.52 32.0159 255.476C33.1392 251.432 33.7009 245.366 33.7009 237.278V70.126C33.7009 61.8133 33.1392 55.7473 32.0159 51.928C30.8925 47.884 28.5335 45.188 24.9389 43.84C21.5689 42.2673 16.5139 41.3687 9.77386 41.144V34.404Z"
            fill="black"
          />
          <path
            d="M349.309 34.404V41.144C342.569 41.3687 337.401 42.2673 333.807 43.84C330.437 45.188 328.19 47.884 327.067 51.928C325.943 55.7473 325.382 61.8133 325.382 70.126V237.278C325.382 245.366 325.943 251.432 327.067 255.476C328.415 259.52 330.774 262.216 334.144 263.564C337.514 264.912 342.569 265.811 349.309 266.26V273C342.793 272.551 334.368 272.326 324.034 272.326C313.924 272.101 303.589 271.989 293.03 271.989C280.898 271.989 269.44 272.101 258.656 272.326C248.096 272.326 239.559 272.551 233.044 273V266.26C240.008 265.811 245.176 264.912 248.546 263.564C251.916 262.216 254.162 259.52 255.286 255.476C256.409 251.432 256.971 245.366 256.971 237.278V70.126C256.971 61.8133 256.409 55.7473 255.286 51.928C254.162 47.884 251.803 45.188 248.209 43.84C244.839 42.2673 239.784 41.3687 233.044 41.144V34.404C239.559 34.6287 248.096 34.8533 258.656 35.078C269.44 35.3027 280.898 35.415 293.03 35.415C303.589 35.415 313.924 35.3027 324.034 35.078C334.368 34.8533 342.793 34.6287 349.309 34.404Z"
            fill="black"
          />
          <path
            d="M490.501 34.404L572.055 244.692C575.2 252.331 578.57 257.835 582.165 261.205C585.759 264.35 589.017 266.035 591.938 266.26V273C583.85 272.551 574.414 272.326 563.63 272.326C552.846 272.101 541.837 271.989 530.604 271.989C519.146 271.989 508.362 272.101 498.252 272.326C488.142 272.326 480.054 272.551 473.988 273V266.26C485.446 265.811 492.635 263.901 495.556 260.531C498.701 256.936 498.027 249.41 493.534 237.952L439.614 88.661L446.354 76.866L399.848 197.849C394.231 212.452 390.749 224.247 389.401 233.234C388.277 241.996 388.839 248.736 391.086 253.454C393.332 258.172 396.927 261.43 401.87 263.227C406.812 265.024 412.654 266.035 419.394 266.26V273C411.081 272.551 403.555 272.326 396.815 272.326C390.299 272.101 383.11 271.989 375.247 271.989C370.978 271.989 366.372 272.101 361.43 272.326C356.712 272.326 352.668 272.551 349.298 273V266.26C354.465 265.361 359.52 262.104 364.463 256.487C369.63 250.646 374.91 240.76 380.302 226.831L455.116 34.404C460.508 34.8533 466.349 35.078 472.64 35.078C479.155 35.078 485.109 34.8533 490.501 34.404ZM502.296 175.944V182.684H401.87L405.24 175.944H502.296Z"
            fill="#F4F4F4"
          />
          <path
            d="M778.451 34.404C777.552 45.6373 776.878 56.5337 776.429 67.093C776.204 77.4277 776.092 85.4033 776.092 91.02C776.092 95.738 776.204 100.231 776.429 104.5C776.653 108.769 776.878 112.363 777.103 115.284H769.352C765.532 96.6367 760.253 82.0333 753.513 71.474C746.773 60.69 739.359 53.1637 731.271 48.895C723.408 44.4017 715.432 42.155 707.344 42.155H702.963C697.121 42.155 692.74 42.7167 689.82 43.84C686.899 44.7387 684.877 46.6483 683.754 49.569C682.855 52.4897 682.406 57.0953 682.406 63.386V233.908C682.406 242.895 683.304 249.747 685.102 254.465C687.124 258.958 690.831 261.879 696.223 263.227C701.615 264.575 709.478 265.249 719.813 265.249V273C712.174 272.775 702.176 272.551 689.82 272.326C677.463 272.101 664.32 271.989 650.391 271.989C640.056 271.989 629.722 272.101 619.387 272.326C609.052 272.551 599.279 272.775 590.068 273V266.26C597.032 265.811 602.2 264.912 605.57 263.564C608.94 262.216 611.186 259.52 612.31 255.476C613.433 251.432 613.995 245.366 613.995 237.278V70.126C613.995 61.8133 613.433 55.7473 612.31 51.928C611.186 47.884 608.828 45.188 605.233 43.84C601.863 42.2673 596.808 41.3687 590.068 41.144V34.404C599.953 34.6287 610.4 34.8533 621.409 35.078C632.642 35.078 643.651 35.1903 654.435 35.415C665.443 35.415 675.553 35.415 684.765 35.415C694.201 35.415 701.952 35.415 708.018 35.415C718.352 35.415 730.035 35.415 743.066 35.415C756.321 35.1903 768.116 34.8533 778.451 34.404ZM729.586 149.658C729.586 149.658 729.586 150.781 729.586 153.028C729.586 155.275 729.586 156.398 729.586 156.398H672.296C672.296 156.398 672.296 155.275 672.296 153.028C672.296 150.781 672.296 149.658 672.296 149.658H729.586ZM739.359 105.174C738.46 117.98 738.011 127.753 738.011 134.493C738.236 141.233 738.348 147.411 738.348 153.028C738.348 158.645 738.46 164.823 738.685 171.563C738.909 178.303 739.471 188.076 740.37 200.882H732.619C731.271 192.569 728.463 185.043 724.194 178.303C720.15 171.563 714.87 166.283 708.355 162.464C701.84 158.42 694.313 156.398 685.776 156.398V149.658C692.066 149.658 697.795 148.31 702.963 145.614C708.13 142.918 712.624 139.323 716.443 134.83C720.487 130.337 723.744 125.506 726.216 120.339C728.912 115.172 730.709 110.117 731.608 105.174H739.359Z"
            fill="#F4F4F4"
          />
        </svg>

        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">Página de Login</h1>
          <p className="text-stone-400 mt-5">
            Portal de Integração de Atividades Físicas da UFRN
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/protected"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Protected Page
          </Link>
          <p className="text-white">·</p>
          <a
            href="https://vercel.com/templates/next.js/prisma-postgres-auth-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Deploy to Vercel
          </a>
        </div>
      </div>
      <footer className="bg-white lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="public/imgs/campo.jpeg"
            alt="Pista de Atletismo - UFRN"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {" "}
                  Contato com a Secretaria{" "}
                </span>
                <a
                  href="#"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                >
                  (84)3215-3455
                </a>
              </p>

              <ul className="mt-8 space-y-1 text-sm text-gray-700">
                <li>
                  Estrada do Ginásio de Desportos, R. do Esporte - Lagoa Nova,
                  Natal - RN
                </li>
              </ul>
              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>

                    <Github />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-gray-900">Serviços da PIAF</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Incrições de alunos{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Professores{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Localização{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      SIGAA{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Desenvolvimento</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Sobre{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Conheça o time{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Reportar problema{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                &copy; 2024. Desenvolvido na Escola de Ciências e Tecnologia da UFRN.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
