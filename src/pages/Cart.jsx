import React from "react";
import { useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className=" flex flex-col justify-center lg:items-center">
      <h1 className=" font-bold px-4 py-2 my-2 rounded-md">
        {cart.length} items in the cart{" "}
      </h1>
      <div className=" w-full flex justify-center items-center">
        <div className="w-[95%] lg:w-[50%] ">
          <Table className="rounded-xl border border-black  ">
            <Thead className=" bg-black text-white">
              <Tr className="flex gap-x-12 rounded-t-md border-b-black  px-6 py-2">
                <Th className="flex-1 text-left text-sm font-medium uppercase ">
                  items
                </Th>
                <Th className=" hidden sm:block text-left text-sm font-medium uppercase ">
                  Product
                </Th>
                <Th className="text-left text-sm font-medium uppercase ">
                  Price
                </Th>
                <Th className="text-center text-sm font-medium uppercase ">
                  created At
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart?.length === 0 ? (
                <div className=" flex min-h-[10rem] justify-center items-center text-yellow-800 font-bold">
                  {" "}
                  <h1>Cart Is Empty</h1>{" "}
                </div>
              ) : (
                cart?.map((item, index) => {
                  return (
                    <div className="flex flex-col">
                      <Tr
                        key={index}
                        className="flex gap-x-10 border-b-4  px-6 py-2"
                      ><div>
                        
                      </div>
                        <Td className="flex flex-col flex-1 gap-x-2 sm:w-full">
                          <img
                            src={item?.imgUrl[0]}
                            alt={item?.productName}
                            className="h-[148px] w-[300px] lg:w-[220px] rounded-md object-cover"
                          />
                          <p>{item.productName}</p>
                        </Td>

                        <Td className="text-sm font-medium lg:text-right lg:w-32 ">
                          {item.productName}
                        </Td>
                        <Td className="text-sm font-medium ">
                          ₹{item.productPrice}
                        </Td>
                        <Td className="text-sm text-center font-medium ">
                          {item.createdAt.slice(2, 15)}
                        </Td>
                      </Tr>
                    </div>
                  );
                })
              )}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
