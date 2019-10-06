import React from 'react';

function Loading(props) {
    return (
        <div>
            <div className="bigText">Подождите, данные загружаются</div>
            <div className="refreshBanner">
                <img className="refreshImage" src="/images/refresh.svg"/>
            </div>
        </div>
    );
}

export default Loading;
