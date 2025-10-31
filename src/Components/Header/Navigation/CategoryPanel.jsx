import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "../../../Components/Header/Navigation/NaviStyle.css";
const CategoryPanel = (props) => {
  const [submenuIndex, setsubmenuIndex] = useState(null);
  const [innersubmenuIndex, setinnersubmenuIndex] = useState(null);
  const openSubmneu = (index) => {
    if (submenuIndex === index) {
      setsubmenuIndex(null);
    } else {
      setsubmenuIndex(index);
    }
  };

  const openinnerSubmneu = (index) => {
    if (innersubmenuIndex === index) {
      setinnersubmenuIndex(null);
    } else {
      setinnersubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between ">
        Shop By Categories
        <IoCloseSharp
          className="curosr-pointer text-xl"
          onClick={() => props.openCategoryPanel(false)}
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                FASHION
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(0)}
              />
            )}
            {submenuIndex === 0 && (
              <ul className="submneu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                      Apparel
                    </Button>
                  </Link>
                  {innersubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(0)}
                    />
                  )}
                  {innersubmenuIndex === 0 && (
                    <ul className="inner-submneu  w-full pl-3">
                      
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Smart Tablet
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Creppe T-Shirt
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Leather Watch
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Rolling Diamond
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                OutWear
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(1)}
              />
            )}
            {submenuIndex === 1 && (
              <ul className="submneu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                      Apparel
                    </Button>
                  </Link>
                  {innersubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(1)}
                    />
                  )}
                  {innersubmenuIndex === 1 && (
                    <ul className="inner-submneu  w-full pl-3">
                      {/* <li className="list-none relative">
                    <Link
                      to="/"
                      className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                    >
                      Apparel
                    </Link>
                    <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                  </li> */}
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Smart Tablet
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Creppe T-Shirt
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Leather Watch
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Rolling Diamond
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                FASHION
              </Button>
            </Link>

            {submenuIndex === 2 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(2)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(2)}
              />
            )}
            {submenuIndex === 2 && (
              <ul className="submneu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                      Apparel
                    </Button>
                  </Link>
                  {innersubmenuIndex === 2 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(2)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(2)}
                    />
                  )}
                  {innersubmenuIndex === 2 && (
                    <ul className="inner-submneu  w-full pl-3">
                      {/* <li className="list-none relative">
                    <Link
                      to="/"
                      className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                    >
                      Apparel
                    </Link>
                    <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                  </li> */}
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Smart Tablet
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Creppe T-Shirt
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Leather Watch
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Rolling Diamond
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                FASHION
              </Button>
            </Link>

            {submenuIndex === 3 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(3)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmneu(3)}
              />
            )}
            {submenuIndex === 3 && (
              <ul className="submneu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !px-3 !text-[rgba(0,0,0,0.8)] !justify-start !text-left">
                      Apparel
                    </Button>
                  </Link>
                  {innersubmenuIndex === 3 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(3)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openinnerSubmneu(3)}
                    />
                  )}
                  {innersubmenuIndex === 3 && (
                    <ul className="inner-submneu absolute top-[100%] left-[0%] w-full pl-3">
                      {/* <li className="list-none relative">
                    <Link
                      to="/"
                      className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                    >
                      Apparel
                    </Link>
                    <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                  </li> */}
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Smart Tablet
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Creppe T-Shirt
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Leather Watch
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className=" link w-full !px-3 transatcion text-[14px] !justify-start !text-left"
                        >
                          Rolling Diamond
                        </Link>
                        <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <>
      <div>
        <Drawer
          open={props.isOpen}
          onClose={() => props.openCategoryPanel(false)}
        >
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};

export default CategoryPanel;
