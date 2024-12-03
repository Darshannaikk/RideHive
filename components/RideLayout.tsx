import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useRef } from "react";
import { Image, Text, TouchaleOpacity, View } from "react-native";
import { GesturHandlerRootView } from "react-native-gesture-handler";

import Map from "@/components/Map";
import { Icons } from "@/constants";

const RideLayout = ({
    title,
    SnapPoints,
    children,
}: {
    title: stirng;
    snapPoints?: string[];
    children: React.ReactNode;
}) => {
    const bottomSheetRef = usedRef<BottomSheet
}