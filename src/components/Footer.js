import React from 'react'; 

const Footer = () => { 
    return( 
        <div className='app-footer'> 
            <div className='container'> 
                <div className='row'> 
                {/* column 1 */}
                <div className='col1'> 
                    <h4>Tik-Talk</h4>
                    <ul className='list'> 
                        <li>123-456-789</li>
                        <li>San Antonio, TX</li>
                        <li>123 Norf Souf</li>
                    </ul>
                </div>
                {/* column2 */}
                <div className='col2'> 
                    <h4>More stuff</h4>
                    <ul className='list'> 
                        <li>Topics coming soon</li>
                        <li>Usernames coming soon</li>
                        <li>User icon coming soon</li>
                     </ul>
                </div>
                {/* {column 3} */}
                <div className='col3'> 
                    <h4>Add Topic</h4>
                        <ul className='list'> 
                            <li>More stuffs</li>
                            <li>More stuffs</li>
                            <li>More stuffs</li>
                        </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;