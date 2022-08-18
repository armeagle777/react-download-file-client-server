import FileDownload from 'js-file-download'
import Axios from 'axios'

function App() {
    const fileDownloader = (e) => {
        e.preventDefault()
        Axios({
            url: 'http://localhost:7000/file',
            method: 'GET',
            responseType: 'blob'
        }).then(res=>{
          FileDownload(res.data,'image.png')
        })
    }

    return (
        <div className="App">
            <img src="http://localhost:7000/download.jpeg" alt=""/>
            <button onClick={fileDownloader}>Download</button>
        </div>
    )
}

export default App;
