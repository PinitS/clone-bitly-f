import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { APIRequest } from '../../../application/helpers/http';
import { ReactComponent as Logo } from '../../../assets/icons/navBarIcon.svg';
import Nav from '../../../styles/styled/Nav';
import Container from '../../../styles/styled/Container';
import {
  BodyCard,
  InputGenLink,
  PolicyText,
  ShortLinks,
  // Customize,
  LinkUrl
} from '../../../styles/styled/GenLinkStyle';

const AppLogo = styled(Logo)`
  height: 36px;
  width: auto;
  margin-top: 25px;
`;

export default function GenUrl() {
  const [urlInput, setUrlInput] = useState<string>("");
  const [shortenUrl, setShortenUrl] = useState<string>("");

  function submitData() {
    const url = '/gen/ShortenUrl';
    const data = { fullPath: urlInput };
    const method = 'POST';
    APIRequest({
      method,
      url,
      data,
    }).then(json => {
      if (json && json.code === 200) {
        const { REACT_APP_API_ENDPOINT } = process.env;
        setShortenUrl(`${REACT_APP_API_ENDPOINT}/${json.response.shortPath}`);
      } else {
        console.log('msg :>> ', json.msg);
      }
    }).catch(error => {
      console.log('catch error :>> ', error);
    });
    // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

  }

  function copyToClipboard() {
    navigator.clipboard.writeText(shortenUrl);
    toast.success('Copy Success!!');
  }

  return (
    <div>
      <Nav>
        <div className="navbar-brand">
          <Container>
            <AppLogo />
            {/* <Logo /> */}
          </Container>
        </div>
      </Nav>
      <BodyCard>
        <Container>
          <InputGenLink>
            <input name="urlInput" id="urlInput" placeholder="Shorten your link" value={urlInput} onChange={(e: any) => setUrlInput(e.target.value)} />
            <button onClick={() => submitData()} >Shorten</button>
          </InputGenLink>
          {/* <hr /> */}
          <PolicyText>By clicking SHORTEN, you are agreeing to Fastly's Terms of Service and Privacy Policy</PolicyText>
          <ShortLinks>
              {shortenUrl && <>
                <LinkUrl>
                      <p style={{ color: '#F2994A' }} >{shortenUrl}</p>
                    <span>
                      <button onClick={() => copyToClipboard()}>Copy</button>
                    </span>
                </LinkUrl>
              </>}
              {/* <Customize>
                <p>Want to customize, brand,and track your links ?</p>
                <span>
                  <button>Get Started</button>
                </span>
              </Customize> */}
          </ShortLinks>
        </Container>
        </BodyCard>
    </div>
  );
}
