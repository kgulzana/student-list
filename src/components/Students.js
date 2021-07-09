import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchStudents } from "../store/actions/students";
import { getMeAction } from "../store/actions/auth";
import Student from "./Student";
import Headings from "./Headings";

export default function Students() {
  let dispatch = useDispatch();

  let { logined } = useSelector((state) => state.auth);

  let { lesson } = useParams();

  useEffect(() => {
    dispatch(fetchStudents(lesson));
  }, [lesson]);

  useEffect(() => {
    let token = localStorage.getItem("x_token");
    dispatch(getMeAction(token));
  }, []);

  let { error, loading, students } = useSelector((state) => state.math);
  return (
    <>
      {logined ? (
        <>
          <Headings loading={loading} lesson={lesson} />
          {loading && <h2>Loading</h2>}
          {error && <div className="alert alert-danger">Error!</div>}
          {!!students.length &&
            students.map((student) => (
              <Student key={student.id} data={student} />
            ))}
        </>
      ) : (
        <div className="alert alert-danger">
          You are not authorized! <Link to="/login">Login!</Link>
        </div>
      )}
    </>
  );
}
