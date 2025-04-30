
const LOCAL_IP = '10.0.2.2';

const getURL = (path) => {
    return (`http://${LOCAL_IP}:8000/${path}`);
};

export { getURL };