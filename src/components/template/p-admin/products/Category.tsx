import TitleBox from "@/components/module/titleBox/TitleBox";
import AllCategory from "./AllCategory";
import CreateCategory from "./CreateCategory";

const Category = async () => {
  return (
    <div>
      <div>
        <TitleBox title="Category" />
      </div>

      <div className="border-2  py-2 mt-4 bg-[#c8cbcb]">
        {/* Create Category */}
        <CreateCategory />

        <div>
          {/* <AllCategory /> */}
          <div>
            <AllCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
