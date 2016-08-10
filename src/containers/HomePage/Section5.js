import React from 'react';
import Section from './Section';
import ScheduleRow from './ScheduleRow';
import style from './style.scss';

const Section5 = () => (
  <Section>
    <div className={style.scheduleContainer}>
      <div className={style.scheduleTable}>
        <ScheduleRow from="08:50" to="09:20" event="報到" />
        <ScheduleRow from="09:20" to="19:30" event="開場" />
        <ScheduleRow from="09:30" to="10:00" event="3分鐘簡介(1)" />
        <ScheduleRow from="10:00" to="10:30" event="分組媒合(1)" />
        <ScheduleRow from="10:30" to="11:00" event="3分鐘簡介(2)" />
        <ScheduleRow from="11:00" to="11:30" event="分組媒合(2)" />
        <ScheduleRow from="11:30" to="12:00" event="到喜歡的組別討論細節" />
        <ScheduleRow from="12:00" to="12:50" event="午餐、休息" />
        <ScheduleRow from="12:50" to="13:00" event="簡介Hackathon" />
        <ScheduleRow from="13:00" to="17:00" event="Hackathon" />
        <ScheduleRow from="17:00" to="17:50" event="分享各組成果、計畫" />
        <ScheduleRow from="17:50" to="18:00" event="頒獎" />
      </div>
    </div>
    <div className={style.scheduleTitle}>活動流程</div>
    <div className={style.location}>
      <p>2016 / 9 / 28</p>
      <p>國立清華大學台達館</p>
      <p>參加對象: 清大在校生</p>
      <p>報名費全免</p>
    </div>
    <div className={style.joinTitle}>活動報名</div>
  </Section>
);

export default Section5;
