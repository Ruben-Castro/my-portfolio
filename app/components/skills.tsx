import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/next.png"
            alt="Next Js"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/fast_logo.png"
            alt="Fast API"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/net_logo.png"
            alt=".NET Core"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/python.png"
            alt="Python"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAMAAAD1LOYpAAAAY1BMVEUxeMb///8rdcUgccO8z+mXtN4+gMn7/P4AYr4kc8QAZsAAacGxx+bn7ffN2+7a5fNSic3H1uyHqtlekdCCptgXbsPV4PH09/tJhMrt8vmcuN9YjM2QsNxzndRpl9KqweMAW7wUsK/tAAAEp0lEQVR4nO2d15arIBRAERwNtsSCmMRy//8rr6ZMEdCg2NY6+2keou45gAIHEVnfhHGZOmgHOGkZhz9e6P1HlCCf4a3tnmDmoyTqKfKMkp34PcGEZvy3YlSwrZ1EWBH9KOaIbu0jg6L8rRihXZXxDxhFT0Ve7DKGHbTgD8Vsh/XwDcs6xWi3MeygUauYkK01hiCJhcK9tpUnuBWM/a0thvFjVO64sXSwEqW7Lue2pFO0i77NELsXBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbAlBBC8QP6+nveCaciPx3x6aXKyltgxy12ENzKpEodxmYsSHWmIvPzSGbnIbf+4l7PUVAxb6Ilja1pXO+9OGLiJOehI87ZtMWA1J6oGF7+KvpFEI4dE0xaIW1IkZLbdfyYLRVJOhrBjRVZ0m8he1Mktw+P2UyRlJ8es5UiqT8+ZiNFjN29K/oaJ9hGkdbyxuxyfm3h/HeMN1IMZH5Rk90R8xlx0qyxvx+L0xSxbbkiwjXFX7wUHck9O2712h7Y4/SYdJ7ldYYiYieBf0nvmoH4m5P3KmdB8Fp7/Y4aJifHvk5WlEC+ele1lV1S1ggBT6WvsGD/3iyqqDy1J3S/bqqXbCipS1OGOlH0+u1Z6Eb+kVxQURlFv9+yzuu8w6KhyPqK+SqGOoqkr9jvjG+vKETRylZ591CnRfcNrauzxiucOi1aHLFEdAVHnRYtGeOe78u/f6jTXGQ9bp6QpQOpoYjvEsUukP6ykhp1EaFI6mhFlcFnySeK6pAIv/0mThbcCUInihipB/m8dJZq3TpRRKxSKraSTb1MJLXqIvIVtfElGTlCD3cRxaHiwmhwyq5tOXfzu3/oKSJyGZkU4wEy3bo1FccdLV4ZrpJ6dbE7oBisj49TmN2oRDeK3ZYko8Px3DFZ2PqK3b1nbBI0TA06TlFEzGlG5p9M9iQnKXYZg5HSzs1ttTFNsRvOO8NZA9tYUWu36B9JVgzmXlJTRT01ig9JQu6RcnI+NLVlyRzFFuqljepeXhkq6pmK3cxIoWjetqFhzfS6+A1mJJZJmpoJmB3FhyTJJI5uvZTipPMS2QyuoY2SjERR4dgspTixdIg4hDXUXkxFESFPeCRGe1PEwthrC8VBe3GyYjFFdcYgroeuKSrGq0fRC92vk7oxEaGgg/UV235Nrh6EijmPcvX74sOBB4UvlWT9NFjbjzDTHdNPDXEbESGUlJXCI3AoLbOsYkuepIgx+jLAxEeVZAY3MjQ00Jnr/lXZrrld1sjvcpisqIJc1tNRpt9mK2rkAOXZ4hd8g4GBqDiIqSAupxgaEpxcF0fh9YKDVDNRTMzlYxaK4s3gppqLRNE19OhTKc6PIjc1glYpauUAZYLNnOW+8xSRk4xO0FquXZve21VYjziUGiL4cgsHZhbd8GsgQTR1JQXN8ugPt8GHP2ZekdjxWZjH4WH71L6c1LcaZ8VNXzFhuEjrrGyCuPuf4ji4JVV6QWwo5YLTlbfOfa7WZ28+WLfPyiNsQHyAbZwPsBn2EbYUP8DG7EfY3v4AHwk4wqcWjvDBivY5nuz9sx/WAT6e0rHXT9D8Bwn1RDUpxL+iAAAAAElFTkSuQmCC"
            alt="Typescript"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
