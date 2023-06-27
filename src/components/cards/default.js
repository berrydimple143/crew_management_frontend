import { UsergroupAddOutlined, BookOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const DefaultCard = ({ document_count, crew_count }) => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Total Documents"
          value={document_count}
          precision={0}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<BookOutlined />}
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Total Crews"
          value={crew_count}
          precision={0}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<UsergroupAddOutlined />}
        />
      </Card>
    </Col>
  </Row>
);
export default DefaultCard;
