import HomeSection from "../../containers/HomeSection";




export default function index() {
  return (
    <div className="flex w-full flex-col mt-[120px] mb-[2em] ">

      <div className="w-full boxCenter">
        <div className="w-full  containerBox">
          <HomeSection/>
        </div>
      </div>
    </div>
  );
}