const Footer = props => {

  return (<>
    <div className="footer">
    Copyright © 2020 빅데이터 - N/A
    </div>
    <style jsx>{`
      .footer{
        width: 100%;
        height: 7rem;
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #666;
      }
    `}</style>
  </>)
}

export default Footer