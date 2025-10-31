import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
const NaviIndex = () => {
  const [isOpen, setisOpen] = useState(false);
  const openCategoryPanel = () => {
    setisOpen(true);
  };
  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-8">
          <div className="col1 w-[20%] ">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" /> SHOP CATEGORIES
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold " />
            </Button>
          </div>
          <div className="col2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] opacity-0 transition-all bg-white shadow-md">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] opacity-0 transition-all bg-white shadow-md">
                          <ul>
                            <li className="list-none w-fulla relative">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  T-shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start  !rounded-none">
                                 Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Footwear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Watch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Pants
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start  !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transaction text-[14px] font-[500] color:rgba(0, 0, 0, 0.8)!important;"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Jewellery
                  </Button>
                </Link>{" "}
              </li>
            </ul>
          </div>

          <div className="col3 w-[20%] ">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* category sidebar */}
      <CategoryPanel openCategoryPanel={setisOpen} isOpen={isOpen} />
    </>
  );
};

export default NaviIndex;
