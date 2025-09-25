import { HREF, fetchSeminars } from "../../db";
import React,{useState} from "react";
import { Link, useParams } from "react-router-dom";

export function Menu_2023() {
  const {index} = useParams<{index: string}>();
  const perPage = 5;

  const currentYear=2023;

  const [time,setTime] = useState(2021)

  // const to_2020 = ()=> setYear

  const result = fetchSeminars();
  const allSeminars = result.filter((val)=>{
    return val.year === 2023
  })

  function change_2020(){
    setTime(2020)
  }

  function change_2021(){
    setTime(2021)
  }

  function change_2022(){
    setTime(2022)
  }

  function change_2023(){
    setTime(2023)
  }
  function change_2024(){
    setTime(2024)
  }
  function change_2025(){
    setTime(2025)
  }
  const allSeminarsCount = allSeminars.length;

  const totalPage = Math.ceil(allSeminarsCount / perPage);
  if (index && (Number(index) < 1 || Number(index) > totalPage)) {
    return <></>;
  }
  const currPage = index ? Number(index) : 1;
  const offset = (currPage - 1) * perPage;
  const seminars = allSeminars.slice(offset, offset + perPage);
  const seminarsCount = seminars.length;

  const lis = seminars.map((seminar, index) => {
    return (
      <li id={`line_u5_${index}`} key={index}>
        <Link to={`${HREF.SEMINAR_PAGE}/${seminar.id}`} title={seminar.title}>
          <div className="list-txt fl">
            <h3>{seminar.title}</h3>
            <p>{seminar.summary}</p>
          </div>
        </Link>
      </li>
    );
  });

  const pagination = (
    <div>
      {currPage === 1 ? (
        <>
          <span className="PrevDisabled">首页</span>
          <span className="PrevDisabled">前一页</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.SEMINAR_2023}/1`}>
            首页
          </Link>
          <Link className="Prev" to={`${HREF.SEMINAR_2023}/${currPage - 1}`}>
            前一页
          </Link>
        </>
      )}
      {currPage === totalPage ? (
        <>
          <span className="NextDisabled">下一页</span>
          <span className="NextDisabled">尾页</span>
        </>
      ) : (
        <>
          <Link className="Prev" to={`${HREF.SEMINAR_2023}/${currPage + 1}`}>
            下一页
          </Link>
          <Link className="Prev" to={`${HREF.SEMINAR_2023}/${totalPage}`}>
            尾页
          </Link>
        </>
      )}
    </div>
  );

  return (
    <React.Fragment>
      <div className="local fl">
        <h3>研讨会</h3>
        <div className="dqwz fr">
          当前位置：
          <Link to={HREF.INDEX}>主页</Link>
          &gt;
          <Link to={HREF.SEMINAR}>研讨会</Link>
          {/* &gt;
          <Link to={HREF.SEMINAR_PAGE}>{time}</Link> */}
        </div>
      </div>
      <div className="cy-title fl">
        <ul>
          <li>
            <Link onClick={change_2025} to={`${HREF.SEMINAR_2025}`}>
              2025
            </Link>
          </li>
          <li>
            <Link onClick={change_2024} to={`${HREF.SEMINAR_2024}`}>
              2024
            </Link>
          </li>
          <li>
            <Link onClick={change_2023} to={`${HREF.SEMINAR_2023}`} className="ej-current">
              2023
            </Link>
          </li>
          <li>
            <Link onClick={change_2022} to={`${HREF.SEMINAR_2022}`}>
              2022
            </Link>
          </li>
          <li>
            <Link onClick={change_2021} to={`${HREF.SEMINAR_2021}`}>
              2021
            </Link>
          </li>
          <li>
            <Link onClick={change_2020} to={`${HREF.SEMINAR_2020}`}>
              2020
            </Link>
          </li>
        </ul>
      </div>
      <div className="list fl">
        <ul>{lis}</ul>
        <table cellSpacing="0" className="pageNo" width="100%" cellPadding="1">
          <tbody>
            <tr>
              <td align="left" width="1%">
                共{seminarsCount}项 &nbsp;&nbsp;{currPage}/{totalPage}&nbsp;
              </td>
              <td align="left">{pagination}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}


export default Menu_2023;
