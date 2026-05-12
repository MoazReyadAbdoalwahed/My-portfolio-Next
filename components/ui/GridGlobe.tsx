"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
    ssr: false,
});

const GridGlobe = () => {
    // 1. إعدادات الكرة الأرضية - تغيير الألوان لتناسب الهوية البرمجية الجديدة (Deep Teal & Cyan)
    const globeConfig = {
        pointSize: 1, // نقاط أصغر لتعطي شكلاً أكثر دقة ونظافة
        globeColor: "#050914", // خلفية داكنة جداً لتعزيز التباين
        showAtmosphere: true,
        atmosphereColor: "#00f2ff", // توهج Cyan خفيف حول الأرض
        atmosphereAltitude: 0.15,
        emissive: "#000000",
        emissiveIntensity: 0.1,
        shininess: 0.7,
        polygonColor: "rgba(0, 242, 255, 0.2)", // لون القارات بلمسة Cyan شفافة
        ambientLight: "#0ea5e9",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 2000,
        arcLength: 0.9,
        rings: 2, // إضافة حلقات لتعطي طابع الرادار
        maxRings: 4,
        // جعل مصر (Damietta/Cairo) هي نقطة البداية الافتراضية للرؤية
        initialPosition: { lat: 31.0379, lng: 31.3556 },
        autoRotate: true,
        autoRotateSpeed: 1.5, // سرعة دوران أسرع قليلاً لزيادة الحيوية
    };

    // 2. تغيير ألوان الأقواس (Arcs) لألوان النيون
    const colors = ["#00f2ff", "#ff00e6", "#7000ff"];

    // 3. تعديل الأقواس لتنطلق من إحداثيات قريبة من موقعك (مصر) إلى العالم
    const sampleArcs = [
        {
            order: 1,
            startLat: 30.0444, // Cairo
            startLng: 31.2357,
            endLat: 40.7128, // NY
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[0],
        },
        {
            order: 1,
            startLat: 30.0444,
            startLng: 31.2357,
            endLat: 51.5074, // London
            endLng: -0.1278,
            arcAlt: 0.2,
            color: colors[1],
        },
        {
            order: 2,
            startLat: 30.0444,
            startLng: 31.2357,
            endLat: 35.6762, // Tokyo
            endLng: 139.6503,
            arcAlt: 0.5,
            color: colors[2],
        },
        {
            order: 2,
            startLat: 31.0379, // Damietta
            startLng: 31.3556,
            endLat: -33.8688, // Sydney
            endLng: 151.2093,
            arcAlt: 0.7,
            color: colors[0],
        },
        {
            order: 3,
            startLat: 30.0444,
            startLng: 31.2357,
            endLat: 48.8566, // Paris
            endLng: 2.3522,
            arcAlt: 0.1,
            color: colors[1],
        },
    ];

    return (
        <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
                {/* تغيير التدرج اللوني في الأسفل ليتناسب مع الخلفية الجديدة الداكنة */}
                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-[#0a0f1e] z-40" />

                {/* زيادة حجم الكرة الأرضية قليلاً لملء المربع */}
                <div className="absolute w-full h-80 md:h-full z-10 translate-y-4">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>
        </div>
    );
};

export default GridGlobe;