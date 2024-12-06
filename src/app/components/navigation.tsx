
import Link from 'next/link'

import './components.css';
import { redirect } from 'next/dist/server/api-utils';

import './nav.css';


export default () => {


    return <>
            <nav>
                <div className='nav-group'>
                    <div className='nav-item-1'>
                        <Link href="/" style={{ fontSize: "64px", fontWeight: "800" }}>The Blog App</Link>
                    </div>
                    <div className='nav-item-2' >
                        <Link href="/auth?login=true" style={{fontWeight: 700}}>Login</Link>
                        <Link href="/auth?signup=true" style={{ background: "#5500FF", color: "white", fontWeight: 700, paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px", paddingTop: "20px", borderRadius: "24px"}} >Sign up</Link>
                    </div>
                </div>
            </nav>
    </>
}