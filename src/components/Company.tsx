import React from 'react'
import { useRecoilValue } from 'recoil'
import { List } from 'semantic-ui-react'
import moment from 'moment'

import { companyStore } from '../stores'

const Company = () => {
  const companyList = useRecoilValue(companyStore)

  return (
    <div>
      <List>
        {companyList.map((item, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header as="a">
                {item.company} @{item.city}
              </List.Header>
              <List.Description>
                <div>{item.job}</div>
                {moment(item.createdAt).format('LL')}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default Company
