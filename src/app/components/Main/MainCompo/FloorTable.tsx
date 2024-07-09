"use client";

import {setFloor } from "@/app/features/Redux/floor/floorSlice";
import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import { room } from "@/app/features/Types";
import React, { useEffect } from "react";
import useSWR from "swr";
import Room from "./Room";
import Modal from '@/app/features/Redux/modal/Modal'


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

const FloorTable: React.FC = () => {
  const {isOpen} = useAppSelector((state)=>state.modal)
  const {floorData,floorNumber} = useAppSelector((state) => state.floor);
  const dispatch = useAppDispatch();
  //フロアのデータを取得
  const { data, isLoading, error } = useSWR(
    `http://localhost:8080/getFloorData/${floorNumber}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      dispatch(setFloor(data));
    }
  }, [dispatch, data]);

  if (isLoading) return (
  <div className="font-bold">
    Loading...
    <div className="animate-ping w-8 h-8 bg-blue-600 rounded-full"></div>
    </div>
)
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
            {isOpen && <Modal />}
            <div className=" flex justify-strech">
      <div className="grid grid-cols-5 gap-4">
        {floorData.map((roomData: room) => (
          <Room 
          key={roomData.id}
          id={roomData.id}
          roomNumber={roomData.roomNumber}
          roomState={roomData.roomState}
          />
        ))}
      </div>
    </div>

    </div>
  );
};

export default FloorTable;
