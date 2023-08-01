"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("f803baaa-3a3e-465f-adb3-35ee86c0b514")
    }, []);

    return null;
}