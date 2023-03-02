export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };
    
        const controller = new AbortController();
        //Abortar después de cierto tiempo 
        options.signal = controller.signal;

        //Sino se aclara el método entonces el default es get
        options.method = options.method || "GET";
        //Si el usuario especifico algunas cabeceras entonces se mezcla con las predeterminadas
        //En caso de no especificar se usaran las predeterminadas
        options.headers = options.headers
        ? {...defaultHeader, ...options.headers}
        : defaultHeader;

        //Cuando exista options.body convertirlo a json 
        options.body = JSON.stringify(options.body) || false;

        //Cuando detecte su valor falso o vacío lo elimina para evitar errores
        if(!options.body) delete options.body;

        console.log(options);
        //Si después de un segundo no hay respuesta del servidor, abortar de inmediato
        setTimeout(() => controller, 3000);

        return fetch(endpoint, options)
        .then((res) => 
            //En caso obtener respuesta convertirla a json, caso contrario rechazar promesa
        res.ok 
        ? res.json()
            :Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error"
          })
        )
        .catch((err) => err);
    };

    const get = (url, options = {}) => {
        customFetch(url, options);
    };

    const post = (url, options) => {
        options.method = "POST";
        return customFetch(url, options);
    };

    const put = (url, options) => {
        options.method = "PUT";
        return customFetch(url, options);
    };


    const del = (url, options) => {
        options.method = "DELETE";
        return customFetch(url, options);
    };


    return (
        get, 
        post, 
        put, 
        del
    )
}