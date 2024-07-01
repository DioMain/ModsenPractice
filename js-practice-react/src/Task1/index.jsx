import "./index.css";

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "green",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "purple",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];


function Task1() {
  return (
    <div className="task1">
      {
        photos.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <div>ID: {item.id}, albumId: {item.albumId}</div>
              <img src={item.url}></img>
              <img src={item.thumbnailUrl}></img>
            </div>
          )
        })
      }
    </div>
  )
}

export default Task1;