import React, { Component } from 'react';
import UserProfilePanel from './UserProfile/UserProfilePanel';
import styles from './index.css';
import { connect } from 'umi';

const index = ({ currentCvsType }) => {
    function getProfile() {
        if (currentCvsType === 'U') {
            return <UserProfilePanel />;
        } else {
            //return <GroupPro
        }
    }
    return <div className={styles.profile_panel}>{getProfile()}</div>;
};

const mapStateToProps = state => {
    return { currentCvsType: state.chatPanel.currentCvsType };
};

export default connect(mapStateToProps)(index);
