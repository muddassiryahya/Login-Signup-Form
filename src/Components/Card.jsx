import React from 'react';
import { Card, Col, Row } from 'antd';
import AppButton from './Button';



function AppCard({ obj }) {

    return (

        <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                    <br />
                    <br />
                    <AppButton obj={obj} title={"View Details"} />
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                    <br />
                    <br />
                    <AppButton obj={obj} title={"View Details"} />
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                    <br />
                    <br />
                    <AppButton obj={obj} title={"View Details"} />
                </Card>
            </Col>
        </Row>
    )
};

export default AppCard;