import TitleBox from "@/components/module/titleBox/TitleBox";
import AllCategory from "./AllCategory";
import CreateCategory from "./CreateCategory";

const Category = async () => {
  const profilometer = "Profilometer"
  const opto_mechanics = "Opto Mechanics"
  const spectroscopy = "Spectroscopy"
  return (
    <div>
      <div>
        <TitleBox title="Category" />
      </div>

      <div className="border-2  py-2 mt-4 bg-[#c8cbcb]">
        {/* Create Category */}
        {/* <CreateCategory /> */}

        <div>
          {/* <AllCategory /> */}
          <div>
            {/* <AllCategory /> */}
            <ul className="child:p-2 child:my-2 child:ms-5 child:shadow child:font-medium child:list-decimal">
              <li>{profilometer}</li>
              <li>{opto_mechanics}</li>
              <li>{spectroscopy}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
