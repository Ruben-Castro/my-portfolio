import React from "react";
import ProjectCard from "./project-card";

const Project = () => {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <h2 className="flex justify-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pb-6">
        Projects
      </h2>
      <div className="flex space-x-3">
        <ProjectCard
          img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAewMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBgMFBwIBAAj/xABAEAACAQIEAwUFBgQEBgMAAAABAgMEEQAFEiEGMUETIlFhcRQygZGhByNCUrHRFXLB8DNiovEkJYKSwuEWRFT/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAqEQACAgEEAQMCBwEAAAAAAAAAAQIRAwQSITFBIjJRE5EzUmFxgaGxFP/aAAwDAQACEQMRAD8AdwmOguJQuOtOPa3HhEQXHunEunH2nHbjSLTj3TiXTj7TjNxxFpxzI6QxPLK6oiC7MTyxxmNdTZdD2lTIFNtlvuf29cZtxFxRU5mXigcJAvN+QA8v3xPm1MYcFOHTPJy+Ed8UcbZrFmJGVyJBSxnu/d6jIvi1xt12GGzgzO5uIMraeogEU0UnZuU91j4jGN1uaNLLaI6gpF3bfV/6xe8IcQtklak0d2o5bLNHfp4eo6fLEeLUtTuTLM2lX0/SjYyvljwrvbCvnPETO8Zy6S8GoDUt732t/fri0oM5FZlc8q39qiuhW3NrmwGL46iMm0ea8UkiHOs0ekU+zoHC2DMN7G/Ij4g4ly7MhVQI86dkz7qOZ02vqPgMUWcIhRale4zH75kQlD0+G/j+mIaXsaedJkb2h5Hs0D3ZhpG2/rhKztZOXwNeNbRyKXxzoxPEr9khkZWci5KCwPpjrRi9TJqCwmPdOJdOPtOJ9wVEdsfacS2x5IyRRtJK6oii5ZjYDAuVGpW6RyEJNrXxRZ7xDBlytHTlXnF7sT3U8b+f0GKjifi4KjwUZaOP3WkI7zeQ8PTmfIYzvMsxv35yTf3Y77nwv5eX++JMup8IvwaTzP7BWfZxLWyPLUznsb+Pv/vhVraySrbsoe7F0UHniVhPWy3e9jyAPLB9BlZmjDJS67DfSu4+WIm77LW1AXxDJEx1A2wVSzdmTfdG2ZfHFtUZZpDBu2jPg4/fFS8DU76XcMDyIxj56ChkUuBqyaqDKtNI5ZRd4iObDw9f3xZcPV0ydoCw0SSAshlCkWPrzvbf0wm0FS0TgFtPeuh/KcNlLVtKq1I9nVYyO0EyMdJ6e7vaxP0642MhWbD5RbJKqPPHrkkikNtOoENud/MbYE7Sohm1p2ojY2bShUKfFj/fLzx5Tvl1ZUIY6gvo71lF2Ci3X+/XA5WpaSaOGNWlbUskUshCtzW5sbc/HbDcXvJX0aNleYQtRRCplgjewVIgxLnYcwRe/oOWOv4i53SicrfYswBOKPL4stplgrKmXtzpVkplb72Fx0Nja25526bDDTCa+aJZBEkQbcI3MDpffHowyN9kcopMtdGPQmJdOKDi/iROHKeILA01XUXEIsdIsRcsfiNuZwuU6VhRxuTpFhmWYUmWwCSqkALe4gPef0H9cZlxHxVJmDyA1AWJG0xQwm9z43/8vkMU2c5xPV1Mj1UntFa2zXa6xDwI5bfl5DrhaqansV0U41u3N7Yiy5nLg9LBp1DnyE1dYUPecPLbYX2X+zithRp5izt3j48sS00AfS0vMruW8dsWVNTwdohTTy5g4Sk2UNpcIkoaRgfwkDfcEYlm+6ywMDoC1Ntm5bHwxYU1MEgR43dSwUE3v+uIgFWlnimfRecrqt13tfx5YOuCfI+UDUVTVtWUKe1SGOQJ2kbG432PP4Yr6+jV5GUWBHIA2wdFO0OaZfA8cerUguq2t3jvtYYKqItXbDSW0yN0v1xiSMUnuQqKhjYiQd4dTixyuvKzhUBLAWsOTjw9fDElTSQS9pqUK1hYnbFXTME7oNmHhhU407LoPeto95MYoNNRQvEuo6pxKuoSLfkPDmbjl9cDVtHTNWVSK7r2VjrhlCrG7EkhgdzYeGKuhrSLyju9ZB4H83oeRxd1OabGMRtCS+5VQ4Kk8yOZt4/vgsU5NpIiz4djsMyDMv4fJFTJSQz04m7w02fULWcn48h+UD1ZJOMpY3ZWp2Jve6pYb+RwuU2URUSUTisjmaeQSLArIpUae8+pTcDla/UbYsYJOyiWOI1Souyi8bberKT9cejv28SfJE4pmpacIf2ksk+YZbRzavZYY5KqfS+k2AsoHmTYX88aEFxlH2h1lq7N5rX0LFSReOwDt/qZMTaidQKtHivIZpVn7toKRiBy1Hnj6CnZVF0JYWPMYMqovZaWJtBIB02uPn9McxTuxBFNKRb8IviODtWz0cip1FBNGNGgujKFJ1G2wwQPZye8yEhiLMRtviJK2OOnKukyNY84z546/iVKwa8pAJBsyMPDyw9SXyTuL8olXQwHZnkv4WIt8jgftZozIk9OJlZtd+0IPM2N9t8SyVVBIhbtYb3Gxt6YkRaCWSIq0drlTpcePlguxTjZC7waqeWWhqI2iN0IYNfe++1+eJoqwSPNpT3nJOq62J9RgmWJI4U7FpVC2Gz3H1xzPAVhjdJXLuO8CqncfDGGbebBwrlDKIzoFrgEeOKbNaYmZpoVa4H5eeL4NIjCHWpDqDcoevxxxPC0ZbWEYbk2NuX++OaGRbTFmCqeN1KDvDbvcvjhiymqVDHpJCspWO+9vFD9LeIxQ1NM+tSi2v4b4moGkkmEEaPM0mxjjBLeot1GJZeiXBY0skLY3VNXS5ZTRvE+oySd9mW+m4BG2/gLDliFs8NQxliq6dUbcBoTf9cTZdldTI+nMIrxKV/D7zk228yAL+GPXcaj2GU0rxjYMYtRNtuYGHRlHto8qSSdI1rKuJKKuq2pdWiRbmzciN+vpjIuJJpK2tpYRdmldqp/HvtdR8io/wCnBUUjvmsSxs0UrhltuCBbSG+bDng3hOkXNOJqvMjH/wALAx0BuShRZR9L/PA6me6kizQqk5MXZMpqaiqzfL5wUekh7SMdHYyKPlpNsLa11XSSPEkIsptubHGqZnFbMc4qPZFW8IX2ky95vvh3dHQDnfzOM2zOrSHNKlXgEnfuW22+mFQe7GuCnLJwyNp0DHNKonUackgd0X2v444hr5wdU8czO3vHcj4YLespUQO9KLEX207D6YHnF3DItlNmsOgOOUV8UA8uRc2mfS5kjnT7M6oOpXc+pxya2hNu1h/0YJD0qXWRHuOZBxBPUUAkUGKSTSTdSL/S++OjFN1TN+tKm3TPFqKMi8MDBQbXVT/THZzCNQO/MPAamH64FqJo4o5p4Y2CbsI2FiOXmbfXAK51Gf8A68g9HH7YNY34FSzu/ai5TMU2Yzsh6d+/64NppK7MnYUs7TlV3UIo58t9vA4X48yikYBYpAx/MdsNWSx5fCvazT1KTOVUhQFUXO24N/jjHcHyzFNSuo9AOWa8yrUpi6oNQ1NItgo5nkcNLZVFS0KxTS1CiIXLQvpDseQIX16/M4W6RVkzCYZbEh1EIgmF1bu21G3S2+JqTN2RWppFjmUtaVEuS5v7wa4KtuSLYaosTkk3VFrQmKtqaunmrD2KqHJPvMgNrAbDffvG+LalrIIYFioaaRqdLqjC5vv/ACnrhMrqaWqPtMCyxD8elrkEgncefjy2wXT57VJCofMSjWuQIlI33xzjYloJObR5dXzyyoT906Rzm9yw8Abd0N4+GNG4Sy9MsyKFFDK0irJIW33ttt16bePrjFc5dZKcqrSySEMxdx8vX98foGIH2OmI13aNP8Md8m3Jb9fPkBcnpjskVwynTydbRRzWl05hnFR2MIJgCGQzXm2lBsUvsvn44yriGVos1nAijYXvdlJP641fOU0VubExUSn2fn2l6n/FGxF/c8/HGdVtbV//ACEUNNJDGJbENLFqAJB/bE+nvainUP1OyqkqFjaIGmhLGFTcahzv1DctsWM8RaOBrAEohItyNumBa7iDMaKUQsaSS6K4ZYRuDcHr5YtJ7vHE7sLsoPL6bYbJPyiabW3hlXWSIszoaVG395mYX+Rx8k0PtxgMCDVJz1Hn44Iq85q6eqanRIdKWClkueQP9cSQZnVzVSwSCBQb7rGLnrzwO2XwMTj8/wBAeaQBcunIAH3ZvhQTc4e81UmhqFNrdm/TCQii9sPwdMS2E0o+9T++mHOmqoKOIzVccjwgBSkYFyTy57dPDrhPphaaP1/ocNcNE+Y0stNFYuyq66mOxHkATheoXKDxPl/sRUEyVVVUFA8cRNkWMXKC+wAHM7469lnoax4uyE7FCrIo1M2pTyt1387fqNTwPRTNGn3hKBkZEbv+Fr8/pizlpc6yutpJswpwiVN9EbSaGNl/ykEbG30wxNJ0hU+aZ7SVFfS08cCHRBMtnYoCCNxYki+197bYArJ1WpkB3IO55b/DBNdxEK11ModQpEfZyTal3NtR8dtQPhthmjyGVI0UrVSd0HXE5KkHfbcfpjHKuxQh1UjxpLDLAVbTcB4++NrgeYx+jcuhLUEWmKVm7JAdHcuLDYubWHkN/XCPW8K+yVM+dSiR6pYiiEoQi32uNjva/LxONBo4Iv4fEXigZezXaaPYbDqOXywKyLI6Q6FoRc9UJmWaxlaFXNKLgFjUAdqOvLR/XGZcQ0lRLmkjU1OzkIoDKORxqmfqq1eaHvg9hpEa040C0i8ped/8vhhI9tp6eqcPl6SPf3zNINXwBAwjBLbH7lmdOUqSEp8jzmaxhyycnTpvt++Guqp5KeClWZGV+zW48Di3jz0xAGLLKNf5jKf/ACwFm9dNm4iEsEEPZA6TAjLfe+/eN9ycMllTEPFNqkisyqhp5eJHnzaK9F2PdYHbV3QOW9rasAQUU1PWiZo7RozWIYbDptizXTHoRzdj1EYxIAzAgEgjle1j8sZ9SKD+nNqqIMxTXBPbl2b/AKHCImH6SIpSPG5GsoxO3keWEFDcDD9O006ETi4umFwf4qeow98GNE+d06VKsI9Oq6OVPK/MemEOE99P5hh/4Ch9p4jy+BraJAVOoXF9JwGsXpCw+/8Ahh3HkVNTZ1l1RBCUBivKzqB2mlvHr8sVvGWYJmXElNVxQsTbQGVyym34QOhBJ5c7jDN9sNNLSS5ZMxAukoXT0tpOHWj4Ky1FEky9pIX7QOOdyPPnzOFY5babRzhaSMg4N4N/j9fVyZklXBSxSMAQlllYEd3xv6Y12mo8vo4EpljuIxa7jU3xJ5nF1DldPTo6U6lNZudNufXAE3DokkZ/a6pb9Bp/bC8spzlfgz6ZcqSeem3LbE0Ct2J1XVxexUdMJ8eaydsUEUjhxcAKRhoyr2ZjM0Umt5iHfvk7hQu3hyw3TytsZkEXiESe2ZqBHUdl2PvB/ub6120/m8/DCacsrah2kipHkiPJywAt8Th3z9R7fnB7Gc/8Lbtr/dr96u1vzHnzxR0U/DyQKMxz2enqSe9TxTMCvhsqk7j9cJxR3Rq/kqyT2zuvCKJsql92aKmSx/FWIv6Njt4aWlWPtiju427AGRRvbdgdsEZk9I+eTpDFSzRvoeKWpkdO6Y1Ivcj674DzAuIYpI5aXStSIWWlk1Lupbe5O/P6Y6MfVtYyUtuNzRzXwyQaKiNUamN1Yge63MeNxbrgRHY3cbp0N9sWTqn8NnVXbUJY2fw3DcvlitJCKbDa3UjHZI7XSBxSc4KTPZGZo2BCaSDyPPGcxHurv0w/NVKBp7m/Kxxn8YsBvizSqokWf8T+AyI7rbxGHv7P5QnFuUbkXlA+ZthAQ2GHbgaQDiPKXtyqVF78u9gtV7QMP4iNE+2xQ9HlLj88y/NV/bGgUEply+meMgloUO/oMJP2ywqMpy1h/wDrI+aN+2HDIE7TIcscHc0kRP8A2DEklIdxQU50kFjbrscQ+2QjZnIPhbHNXRPLNG8bWA2O9uZxKcthc6muSedsKSyXwjLBEqQyowgaO5BKnYr54Wcmqqimz2hg1COCRmjtzDkC3P5YZBIOyvbWo2Ojfe1sK2ZVq0PFtBBJTdxpkKy67CIkLfugHwHxOKdNJW7FSfJ9xGls1zF+wqSTTMvah7RJ3gbFep25+WKLLY0aJJSg1LKOY/KJH/qMXGevFU5tU1MVNLKslFIwqFk7sa7GxXqT49LYW4szzmCB6bLMujZVYk1TKpAJG4Nx4bemF6d7V9/9LMq3SX7IA4tCw5yhcopamg2b+QL+ox3STxV1KTWQJMkU/cWECK1ltdrDf3vXAlXmlU+eZNmVZRzVrtSOJIoozeRg00du705cumLfhXh3PKyjrf8AlE9GiygxCeMozhiL21c7BQL+nPDFjd7goZIe2XR7N7GaKeKGhhgDOGZlaRiQoO3eJ8cVcWWyZrVR0FCFaeY2QSd1bWuTc9LYeKTgrNZEnSpRIAY27OZpRZXttdRzF/64CybgkZTVR1mYcSUk1bBqMdPTi25FudyxtfouNlicmmdLLjgtsDPuIsjnyKsiinqoZFdmCtGALFbagRc2tcfPCQYHBPuWv+bG38WcK55xVmlNPCj9lTwvGS8RHaX/ABd5VF9voMKOZ/Z3n2RRdtUU0c0I3LRkMVHiwvcfC4xVFJdcEEnbtiCscp20E+a74vsoqpKKuo51BDRPrHdvY9L/ABwQlLUMe4ij0N8QlqUHS+YQlybaYe+x+V8dJKapmK07Q1cR8bVvENJS0FbFFqSoEiug0kkKRbnb8WH/AIX4/wAmhyykoa2Z6aaCFIz2ikqbC17i/wBcZNHk9RJCs6UGazRIbmU0cgC+txgepkEqHXSohNyGI3O/gMJeON0gm5KPJ+k8uzaizOLtqCsp50vb7twbeuDNvE/DH5fpKl4JUkgnkR0N1ZCV0/HF2OMeIQLfxmrP/XgXjMWRG1LBBYaSA7AjfywucU5VDVNT1UtM7xU6yCUkEaVIuW1dOXji8rcy/h2gIsZkA7mobE+dvXA+USTs3Yt2URl1CRo2Ynfa3eJOJsbUakzZopOGKt6v7NjKJoY6mJSHm7ZR92H5k9BsRY+GCsrqqjKUlSsWiqS+hxJVV6DsgdgN7nx2GF/iKWQ5dWrl9ZLPKrLEOzdiIn5gm4tbx/8AWM/4ohzPK5oo6+rSpM0V+0hZigN7FRe1iOu3XFUZLikMXqTbZtD8T5dSTGdszyenlcWd4YHmYj+e6/pirrvtFySO+vNs0qj+WERxIfio1fXGDyV0qkhFUeZ3wNJWVBFtdvQDDrYs2Kr+03Khc02RGqa2xrZmn+jHFfN9rubxIUp6ahoo7dwRoFA8rYyh3lbUWdz6tgjNoBT1vYKunso41YgbsdIJPzJ+FsccmOFZ9pvEFVfts2ZB0WAkAYXsw4lrK1WEtZWSauZMmn9DikVLk7Y+0eAx1I2zXfsuy01+QZnm1ZTU1fBSoFSKpLHvjdhseoYbkHcdOtjHxTmFIWTK8syvLwptano1U29TiL7DKpajhjiLJkS9RqEyrf31ddO3oV/1DDA/BGa1NpUSGJuvbSWv62BxPNT6ixsXHyhcrs+z6sgkM2aVW6HuxSaBy8FwgxGeWPWygKDcsxvYW5426j+z1wmqvzJbHYrAmw9C37YWc5+z/KqGcQUnERlje4ejfQ85/k0gAnyIHrjIqUewclS6M67NOyEiylmPu6UO+9tybW64i1f5L+dsbTQcLZNl9KsaRSzrpH+MoDHe/IbXBvtguLhXh1I1U0ERIFrsoJOF/wDR+hJTDamojEpSWNZQLaWAvY88SwrPArTy3AU9oEt8efXEEdTLSe9DCVLW1A8yLjp8Mcx5y1WlgCVuQHA2vfx8eWJG1Q3i+RH4mXOFzAR5bFG9O8isyrD3uXPV6bYqs84e4hzHIYqrOKnK4dL2jZ4SkhNvd1Gx+AG9r72xp0Tqwkk7jWAsSOXngxZE0hRE1RHf8e9t+nzxRjyUkNSSR+WgjGTkSeg5Xx4KeRkZtJsDvYY3/iXgOgzx3qqKEU9VMwdmBssnO/pyvjuh4EyuhgkgdS8zqt2FwNQVhcfBj9MUPUJIW/0MGoIxHIXenWoSxGh7W8jexth6h+zbiTiSofMKaCmho5tHZS1DmPUgVQCFAY28zz540yh4SySmdf8AhY2d2uC+4B8cOKStoCRFSVFhvb6Y6GZSZyRitR9iOaw0M08OY0stUi3WnRTaQ+Go8vlikpvsyzuoJvAilVvp12ud+74X2+uNzrf4zJVxrFVxwUoILaYrs1umq+17Ygo4mgV2zCYVL69Sm1reXn1+eMyZvympOyi+zr7OoOGZJK2rqWlq54uykiUgRqpPLzOw3+WOvtCzjPcheGPLKsdhIhYs0YaRd7czzHwvhnWrIs7bLbfe1tsA5tFFVTRtUKJPwrtfY8/hywp57VDOnZjtRm2cZrNaprquoZj7pkNvlywZTZDntHK9VSUjiogUSx7XLN4fLb440inynKaBe2p6FFnPMqSwHp4YMSrYMEew7tzqNt/9sTOTTthSy+EgOhGZNl0IzGGOCq5tGj3Xl9Dz8cHhgosZkuOdxc3xHW1A7NNDkG9yT1Fse66b8TtfyXGbk+RaoAqFhkBAYi4vubc+n0xNQPanYTsjRqdYv0v188Q1BOhd/wAuO4QFiAUWBQXA+GCqjpVZ1LURQOpI7nIaRYDBMUwd1keoDJyGk8vC+I4ma0y3Omx2v54p6wkSQgEgauQ+GNXwFVIuHrCrMGqW7QXa0cZJAJ6nr8PHHiVjmVCQSqGxZ/mdv6/DFbX92jhZdm7bmPjj0OzKgZiRpPM4G2Jpt8ssxPFJCG3AvyI/vfHAqpIw0hY9mpsAm538cVuX+9H/ADN+owVyXba5N/kMcgpIs2lmfs2SQrGVOoOQWPwxC7N2naKheEe7va3TbEVCS08Wre69cEHmg6ajt8Dguwk7Plqk0gKAxXcD8230xyhCyEkspPIEdfXEdNvUTKd1VVIHQbnElAdSzat7WtfpzxyRt26OCzAuS2p13LX6fDELKZAqgBZdwo5874Nod5Ki++/XESD/AJnL5Jt/3YGuLFp3KhE4qqM7omk9mqotLDSwFvh6H0xWQcSZ8kKII4zYW54L+0wAROQLEtvb0xmccsnZr943LxxRiimjNzTP/9k="
          title="Tiny House"
          description="Tiny House is a Airbnb clone website"
          alt="tiny house image"
          githubLink="https://github.com/Ruben-Castro/TinyHouse_V2"
          liveLink=""
        />
      </div>
    </div>
  );
};

export default Project;