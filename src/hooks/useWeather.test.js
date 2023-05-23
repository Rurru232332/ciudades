import React, { useEffect } from "react";
import useWeather from "./useWeather";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => 
        Promise.resolve({
            weather: "valueData"
        }),
    });
});
/*
const TestHook = () => {
    const { fetchWeather } = useWeather();
    useEffect(() => {
        fetchWeather(1, 1);
    }, []);
}*/
const TestHook = () => {
    const { fetchWeather } = useWeather();
    useEffect(() => {
        fetchWeather(1, 1);
    }, []);
    return <div id="TestHook"></div>;
  };

describe("Test for useWeather", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.append(container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    })

    test.only("Mount component with data", () => {
        act(() => {
            ReactDOM.createRoot(container).render(<TestHook/>)
        })
    })
})