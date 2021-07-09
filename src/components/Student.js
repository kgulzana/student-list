export default function Student ({data}) {
    return (
      <div className="student">
        <div className="row">
          <div className="col-8">{data.name}</div>
          <div className="col-2">{data.score}</div>
          <div className="col-2">{data.level}</div>
        </div>
      </div>
    );
};