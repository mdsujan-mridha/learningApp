import { create } from "apisauce";

const api = create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        "X-API-KEY": "6dc924adf8a5403a7d328fd0ddd1d182403af364cd948ec947f084cab0bce9e7562280bffc6f6e449d6cc594de6fde98523dc133ea340d4df78c4447944f995012288807ba582a3bd8f9a9a858dd63fe23bda3a2b4a33f4f50f081c1f2aafff8de9d2c6d1151acdc7ead18fb08e71b3e287059b67179d6aeb5e9f68d857febdf"
    },
});

const getSliderAPi = () => api.get('/sliders?populate=*');