import React from 'react'

function Footer() {
  return (
   <>
        <footer className="footer d-flex">
                <ul className="d-flex">
                    <li>
                       <a href="https://www.linkedin.com/in/ravi-chavda-415994392//" target='_blank'> <span className="fa fa-linkedin"></span></a>
                    </li>
                    <li>
                        <a href="https://github.com/" target='_blank'><span className="fa fa-github"></span></a>
                    </li>
                    <li>
                        <a href=""target='_blank'><span className="fa fa-facebook"></span></a>
                    </li>
                    <li>
                       <a href="https://www.instagram.com/chavda__ravi__007/" target='_blank'> <span className="fa fa-instagram"></span></a>
                    </li>
                </ul>
                <p>
                    © 2026 Copyright Design By <a href=""> Ravi Chavda</a>
                </p>
            </footer>
   </>
  )
}

export default Footer