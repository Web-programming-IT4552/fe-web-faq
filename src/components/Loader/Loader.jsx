import "./Loader.css";

export default function Loader () {
  return (
    <div className="container">
      <p className="text">読み込み中</p>
      <div className="axis">
        <div className="part"></div>
        <div className="part"></div>
        <div className="part"></div>
        <div className="part"></div>
      </div>
    </div>
  );
}
