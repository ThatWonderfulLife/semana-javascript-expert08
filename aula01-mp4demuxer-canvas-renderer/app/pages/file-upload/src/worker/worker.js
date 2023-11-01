onmessage = ({data}) => {
    console.log('recebido',data)
    setTimeout(() => {
        self.postMessage({
            status:'done'
        })
    },5000);
}

//39:30