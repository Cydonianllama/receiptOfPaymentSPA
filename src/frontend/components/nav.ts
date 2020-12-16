let navTemplate : string = 
`
    <nav class = "nav-main">
        <div class ="logo">
            Logo
        </div>
        <ul class ="actions-user">
            <li><button>Configuration</button></li>
            <li><button>preferences</button></li>
            <li><button>Manual</button></li>
        </ul>
        <div class="user-profile">
            <div class="avatar-user"></div>
            <p>Hello <span>Name user</span></p>
            <div class="actions-user-profile">
                <button id="btn-action-user-profile-logout">logout</button>
            </div>
        </div>
    </nav>
`;

export default navTemplate;