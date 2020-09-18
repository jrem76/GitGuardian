import React from "react"
import styled from '@emotion/styled'

import { Avatar } from "../Components/Avatar"
import { Text } from "../Components/Text"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  border: solid 1px black;
  padding: 5px 15px;
`

const InlineDiv = styled.div`
  display: flex;
  margin-right: 15px;
`

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserInfos = ({ userInfos }) => {
  return (<Container>
    <HeaderContainer>
      <InlineDiv>
        <Avatar src={userInfos.avatar} alt="avatar"/>
      </InlineDiv>
      <ColumnDiv>
        <Text>Name: { userInfos.name }</Text>
        <Text>Login : { userInfos.login }</Text>
        <Text>Repositories number: { userInfos.numberOfRepos }</Text>
        <Text>Commits number: { userInfos.numberOfCommits }</Text>
        { userInfos.organizations.length !== 0 && <Text>Organizations linked: { userInfos.organizations.join(" ") }</Text>}
      </ColumnDiv>
    </HeaderContainer>
    <MainContainer>
      { userInfos.repos.map(repo => <Text key={repo.full_name}>{repo.full_name}</Text>)}
    </MainContainer>
  </Container>)
}