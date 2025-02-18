import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/index";

const Card = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const res = await axios.get("https://dummyjson.com/posts");
        setPosts(res.data.posts);
        console.log(res.data.posts);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, []);
  return (
    <>
      <div className="border bg-[#F5F5F5]">
        {isLoading && <Loading />}
        <div className="w-[1300px]   m-auto flex  ">
          <div className="w-[400px]  flex flex-col gap-[30px] h-[1190px] overflow-hidden">
            {posts.map((item) => (
              <div key={item.id} className="py-[30px]">
                <h1 className="text-[20px] font-bold py-[20px]  hover:text-blue-500 ">
                  {item.title}
                </h1>
                <h1>{item.body}</h1>
              </div>
            ))}
          </div>
          <div className="  px-[20px] py-[30px]">
            <div className="">
              <div>
                <img
                  className="w-[500px]"
                  src="./src/assets/images/image.png"
                  alt=""
                />
              </div>
              <div>
                <div className="flex flex-row gap-[20px]">
                  <div className="flex flex-col gap-[70px] pt-[30px] ">
                    <img
                      className="w-[200px]"
                      src="./src/assets/images/image copy.png"
                      alt=""
                    />
                    <img
                      className="w-[200px]"
                      src="./src/assets/images/image.png"
                      alt=""
                    />
                    <img
                      className="w-[200px]"
                      src="./src/assets/images/image copy 2.png"
                      alt=""
                    />
                    <img
                      className="w-[200px]"
                      src="./src/assets/images/image.png"
                      alt=""
                    />
                    <img
                      className="w-[200px]"
                      src="./src/assets/images/image copy 3.png"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col  gap-[30px] pt-[50px]">
                    <div className="w-[300px] p-[28px] bg-[#E2F1F6] h-[250px] ">
                      <h3 className="font-bold  ">
                        {" "}
                        Avval «tozalash», keyin «egallash»: Tramp G‘azodagi
                        tinchlik umidlarini puchga chiqaryapti
                      </h3>
                      <p className="h-[104px]  overflow-hidden pt-[10px]">
                        Donald Tramp G‘azo sektorini nazoratga olish va u yerda
                        «Yaqin Sharq Riviyerasi»ni qurish niyatini bildirib, bu
                        rejasini Binyamin Netanyahu bilan qo‘shma matbuot
                        anjumanida e’lon qildi.
                      </p>
                    </div>
                    <div className="w-[300px] p-[28px] bg-[#E2F1F6] h-[250px] ">
                      <h3 className="font-bold  ">
                        {" "}
                        Avval «tozalash», keyin «egallash»: Tramp G‘azodagi
                        tinchlik umidlarini puchga chiqaryapti
                      </h3>
                      <p className="h-[104px]  overflow-hidden pt-[10px]">
                        Donald Tramp G‘azo sektorini nazoratga olish va u yerda
                        «Yaqin Sharq Riviyerasi»ni qurish niyatini bildirib, bu
                        rejasini Binyamin Netanyahu bilan qo‘shma matbuot
                        anjumanida e’lon qildi.
                      </p>
                    </div>
                    <div className="w-[300px] p-[28px] bg-[#E2F1F6] h-[250px] ">
                      <h3 className="font-bold  ">
                        {" "}
                        Avval «tozalash», keyin «egallash»: Tramp G‘azodagi
                        tinchlik umidlarini puchga chiqaryapti
                      </h3>
                      <p className="h-[104px]  overflow-hidden pt-[10px] ">
                        Donald Tramp G‘azo sektorini nazoratga olish va u yerda
                        «Yaqin Sharq Riviyerasi»ni qurish niyatini bildirib, bu
                        rejasini Binyamin Netanyahu bilan qo‘shma matbuot
                        anjumanida e’lon qildi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[400px] pt-[70px]">
              <h1 className="text-[20px] font-[600] pb-[20px] border-b hover:text-blue-600 cursor-pointer">
                Fermerlar minimal narxda shartnoma <br />
                tuzishga majburlanyapti. Sohadagi islohot qarshilikka uchramoqda
              </h1>
            </div>
            <div className="w-[400px] pt-[70px]">
              <h1 className="text-[20px] font-[600] pb-[20px] border-b hover:text-blue-600 cursor-pointer">
                Ukraina faqat ukrainaliklardan iborat <br /> tinchlikparvar
                kontingentiga tayyor - <br />
                Zelenskiy
              </h1>
            </div>
            <div className="w-[400px] pt-[70px]">
              <h1 className="text-[20px] font-[600] pb-[20px] border-b hover:text-blue-600 cursor-pointer">
                Fermerlar minimal narxda shartnoma <br />
                tuzishga majburlanyapti. Sohadagi islohot qarshilikka uchramoqda
              </h1>
            </div>
            <div className="w-[400px] pt-[70px] pb-[20px] border-b hover:text-blue-600 cursor-pointer">
              <h1 className="text-[20px] font-[600]">
                AQSh vitse-prezidenti Yevropani <br /> migratsiya siyosatini
                o‘zgartirishga <br /> chaqirdi
              </h1>
            </div>
            <div className="w-[400px] pt-[70px] pb-[20px] border-b hover:text-blue-600 cursor-pointer">
              <h1 className="text-[20px] font-[600]">
                Olimlar «Novichok» kabi zaharlarni <br /> aniqlaydigan dasturni
                ishlab chiqdi
              </h1>
            </div>
            <div className="w-[400px] pt-[70px] pb-[20px] border-b hover:text-blue-600 cursor-pointer">
              <h1 className="text-[20px] font-[600]">
                Buyuk Britaniya Rossiya mudofaa vaziri <br /> o‘rinbosari va
                «Rosatom» tuzilmalariga <br /> qarshi sanksiyalar kiritdi
              </h1>
            </div>
            <div className="w-[400px] pt-[70px] hover:text-blue-600 cursor-pointer">
              <h1 className="text-[20px] font-[600]">
                Zelenskiy Putin bilan muzokara uchun <br /> ultimatum shartini
                aytdi
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
