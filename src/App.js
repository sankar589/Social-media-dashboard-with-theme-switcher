import './App.css';

function App() {
  return (
    <div className="App">
      <div className='dashboard'>
        <div className='header'>
          <div className='head-text'>
              <div className='top'>Social Media Dashboard</div>
              <div className='bottom'>Total Followers: 23,004</div>
            </div>
          <div className='toggle'>
            <div className='tog-text'>Dark Mode</div>
            <div className='tog-switch'>
              <div className='tog-ball'></div>
            </div>
          </div>
        </div>
        <br></br>
        <div className='Overall-Card'>
          <div className='facebook'>
            <div className='handle'>
              <div className='f-logo'></div>
              <div className='h-id'>@nathanf</div>
            </div>
            <div className='followers'>1987
            <div className='follow-text'>FOLLOWERS</div></div>
            
            <div className='fluctuation'>
              <div className='inc-symbol'></div>
              <div className='value'></div>
              <div className='today'>
                <div className='up'></div>
                12 Today</div>
            </div>
          </div>
          <div className='twitter'>
            <div className='handle'>
              <div className='t-logo'></div>
              <div className='h-id'>@nathanf</div>
            </div>
            <div className='followers'>1044
            <div className='follow-text'>FOLLOWERS</div></div>
            
            <div className='fluctuation'>
              <div className='inc-symbol'></div>
              <div className='value'></div>
              <div className='today'>
                <div className='up'></div>
                99 Today</div>
            </div>
          </div>
          <div className='instagram'>
            <div className='handle'>
              <div className='i-logo'></div>
              <div className='h-id'>@realnathanf</div>
            </div>
            <div className='followers'>11k<div className='follow-text'>FOLLOWERS</div></div>
            
            <div className='fluctuation'>
              <div className='inc-symbol'></div>
              <div className='value'></div>
              <div className='today'>
                <div className='up'></div>
                1099 Today</div>
            </div>
          </div>
          <div className='youtube'>
            <div className='handle'>
              <div className='y-logo'></div>
              <div className='h-id'>Nathan F.</div>
            </div>
            <div className='followers'>8239<div className='follow-text'>FOLLOWERS</div></div>
            
            <div className='fluctuation'>
              <div className='dec-symbol'></div>
              <div className='value'></div>
              <div className='today' style={{color : "hsl(356, 69%, 56%)"}}>
                <div className='down' ></div>
                144 Today</div>
            </div>
          </div>
        </div>
        <br></br>
        <div className='overview'>Overview - Today</div>
        <br></br>
        <div className='Overview-details'>
          <div className='overview-card'>
            <div className='title'>Page Views</div>
            <div className='f-logo move'></div>
            <div className='ov-value'>87</div>
            <div className='ov-today' >
                <div className='up' ></div>
                3%</div>
          </div>
          <div className=' overview-card'>
            <div className='title'>Page Views</div>
            <div className='f-logo move'></div>
            <div className='ov-value'>52</div>
            <div className='ov-today' style={{color : "hsl(356, 69%, 56%)"}}>
                <div className='down' ></div>
                2%</div>
          </div>
          <div className='overview-card'>
            <div className='title'>Likes</div>
            <div className='i-logo move'></div>
            <div className='ov-value'>5462</div>
            <div className='ov-today' >
                <div className='up' ></div>
                2257%</div>
          </div>
          <div className='overview-card'>
            <div className='title'>Profile Views</div>
            <div className='i-logo move'></div>
            <div className='ov-value'>52k</div>
            <div className='ov-today' >
                <div className='up' ></div>
                1375%</div>
          </div>
          <div className='overview-card'>
            <div className='title'>Retweets</div>
            <div className='t-logo move'></div>
            <div className='ov-value'>117</div>
            <div className='ov-today'>
                <div className='up' ></div>
                303%</div>
          </div>
          <div className='overview-card'>
            <div className='title'>Likes</div>
            <div className='t-logo move'></div>
            <div className='ov-value'>507</div>
            <div className='ov-today'>
                <div className='up' ></div>
                553%</div>
          </div>
          <div className=' overview-card'>
            <div className='title'>Likes</div>
            <div className='y-logo move'></div>
            <div className='ov-value'>107</div>
            <div className='ov-today' style={{color : "hsl(356, 69%, 56%)"}}>
                <div className='down' ></div>
                19%</div>
          </div>
          <div className='overview-card'>
            <div className='title'>Total Views</div>
            <div className='y-logo move'></div>
            <div className='ov-value'>1407</div>
            <div className='ov-today' style={{color : "hsl(356, 69%, 56%)"}}>
                <div className='down' ></div>
                12%</div>
          </div>

        </div>
        

      </div>
    </div>
  );
}

export default App;
