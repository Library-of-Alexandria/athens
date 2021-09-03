import React from 'react';

import { Block } from './Block';
import { BADGE, Storybook } from '../../storybook';

export default {
  title: 'Components/Block',
  component: Block,
  argTypes: {},
  decorators: [(Story) => <Storybook.Wrapper><Story /></Storybook.Wrapper>],
  parameters: {
    badges: [BADGE.DEV]
  }
};

const data = {
  blockContent: [
    {
      raw: "**Lorem** ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rendered: () => <><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>
    },
    {
      raw: "**Donec** id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
      rendered: () => <><strong>Donec</strong> id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</>
    },
    {
      raw: "**Consectetur** adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rendered: () => <><strong>Consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>
    },
  ]
};

const toggleBlockOpen = (blockId, setBlockState) => setBlockState(prevState => ({ ...prevState, [blockId]: { ...prevState[blockId], isOpen: !prevState[blockId].isOpen } }))

// Stories

const Template = (args) => <Block {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  uid: "123",
  rawContent: data.blockContent[0].raw,
  renderedContent: data.blockContent[0].rendered(),
  isOpen: true,
  refsCount: 12
};

export const Editing = Template.bind({});
Editing.args = {
  isEditing: true,
  isOpen: true,
  rawContent: data.blockContent[0].raw,
  renderedContent: data.blockContent[0].rendered(),
};

export const Series = () => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: data.blockContent[0].raw,
      renderedContent: data.blockContent[0].rendered(),
      presentUser: null,
    },
    b2: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
      presentUser: null,
    },
    b3: {
      isOpen: true,
      rawContent: data.blockContent[2].raw,
      renderedContent: data.blockContent[2].rendered(),
      presentUser: null,
    },
  });

  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
        presentUser={blockState["b1"].presentUser}
      />
      <Block
        uid="2"
        isOpen={blockState["b2"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
        rawContent={blockState["b2"].rawContent}
        renderedContent={blockState["b2"].renderedContent}
        presentUser={blockState["b2"].presentUser}
      />
      <Block uid="3"
        isOpen={blockState["b3"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
        rawContent={blockState["b3"].rawContent}
        renderedContent={blockState["b3"].renderedContent}
        presentUser={blockState["b3"].presentUser}
      />
    </>
  )
};

export const References = () => {
  return (
    <Block
      uid="1"
      isSelected={false}
      isOpen={true}
      refsCount={12}
      rawContent={data.blockContent[0].raw}
      renderedContent={data.blockContent[0].rendered()}
    >
    </Block>
  )
};

export const Selected = () => {
  return (
      <Block
        uid="1"
        isSelected={true}
        isOpen={true}
        rawContent={data.blockContent[0].raw}
        renderedContent={data.blockContent[0].rendered()}
      >
    </Block>
  )
};

export const MultipleSelected = () => {
  return (
    <>
      <Block
        uid="123"
        isSelected={true}
        isOpen={true}
        rawContent={data.blockContent[0].raw}
        renderedContent={data.blockContent[0].rendered()}
      />
      <Block
        uid="123"
        isSelected={true}
        isOpen={true}
        rawContent={data.blockContent[1].raw}
        renderedContent={data.blockContent[1].rendered()}
      >
        <Block
          uid="123"
          isSelected={true}
          isOpen={true}
          rawContent={data.blockContent[2].raw}
          renderedContent={data.blockContent[2].rendered()}
        >
          <Block
            uid="123"
            isSelected={true}
            isOpen={true}
            rawContent={data.blockContent[0].raw}
            renderedContent={data.blockContent[0].rendered()}
          >
          </Block>
        </Block>
      </Block>
    </>
  )
};

export const Tree = () => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: data.blockContent[0].raw,
      renderedContent: data.blockContent[0].rendered(),
      presentUser: null,
    },
    b2: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
      presentUser: null,
    },
    b3: {
      isOpen: true,
      rawContent: data.blockContent[2].raw,
      renderedContent: data.blockContent[2].rendered(),
      presentUser: null,
    },
  });

  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
        presentUser={blockState["b1"].presentUser}
      >
        <Block uid="2"
          isOpen={blockState["b2"].isOpen}
          handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
          rawContent={blockState["b2"].rawContent}
          renderedContent={blockState["b2"].renderedContent}
          presentUser={blockState["b2"].presentUser}
        >
          <Block uid="3"
            isOpen={blockState["b3"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
            rawContent={blockState["b3"].rawContent}
            renderedContent={blockState["b3"].renderedContent}
            presentUser={blockState["b3"].presentUser}
          />
        </Block>
      </Block>
    </>
  )
};

export const Welcome = () => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b2: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b3: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b4: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b5: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b6: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
  })

  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
      >
        <Block uid="2"
          isOpen={blockState["b2"].isOpen}
          handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
          rawContent={blockState["b2"].rawContent}
          renderedContent={blockState["b2"].renderedContent}
        >
          <Block uid="3"
            isOpen={blockState["b3"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
            rawContent={blockState["b3"].rawContent}
            renderedContent={blockState["b3"].renderedContent}
          />
          <Block
            uid="4"
            isOpen={blockState["b4"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b4", setBlockState)}
            rawContent={blockState["b4"].rawContent}
            renderedContent={blockState["b4"].renderedContent}
          >
            <Block uid="5"
              isOpen={blockState["b5"].isOpen}
              handlePressToggle={() => toggleBlockOpen("b5", setBlockState)}
              rawContent={blockState["b5"].rawContent}
              renderedContent={blockState["b5"].renderedContent}
            >
              <Block uid="6"
                isOpen={blockState["b6"].isOpen}
                handlePressToggle={() => toggleBlockOpen("b6", setBlockState)}
                rawContent={blockState["b6"].rawContent}
                renderedContent={blockState["b6"].renderedContent}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </>
  )
};

export const WithAvatars = ({ ...args }) => {
  const [blockState, setBlockState] = React.useState({
    b1: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b2: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b3: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
      presentUser: null,
    },
    b4: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b5: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
    },
    b6: {
      isOpen: true,
      rawContent: data.blockContent[1].raw,
      renderedContent: data.blockContent[1].rendered(),
      presentUser: null,
    },
  })


  return (
    <>
      <Block
        uid="1"
        isOpen={blockState["b1"].isOpen}
        handlePressToggle={() => toggleBlockOpen("b1", setBlockState)}
        rawContent={blockState["b1"].rawContent}
        renderedContent={blockState["b1"].renderedContent}
        isLocked={true}
        presentUser={{ name: "Jeff", color: "#DDA74C" }}
      >
        <Block uid="2"
          isOpen={blockState["b2"].isOpen}
          handlePressToggle={() => toggleBlockOpen("b2", setBlockState)}
          rawContent={blockState["b2"].rawContent}
          renderedContent={blockState["b2"].renderedContent}
          isLocked={true}
          presentUser={{ name: "Matei", color: "#C45042" }}
        >
          <Block uid="3"
            isOpen={blockState["b3"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b3", setBlockState)}
            rawContent={blockState["b3"].rawContent}
            renderedContent={blockState["b3"].renderedContent}
          />
          <Block
            uid="4"
            isOpen={blockState["b4"].isOpen}
            handlePressToggle={() => toggleBlockOpen("b4", setBlockState)}
            rawContent={blockState["b4"].rawContent}
            renderedContent={blockState["b4"].renderedContent}
            isLocked={true}
            presentUser={{ name: "Alex", color: "#611A58" }}
          >
            <Block uid="5"
              isOpen={blockState["b5"].isOpen}
              handlePressToggle={() => toggleBlockOpen("b5", setBlockState)}
              rawContent={blockState["b5"].rawContent}
              renderedContent={blockState["b5"].renderedContent}
              presentUser={{ name: "Felipe Silva", color: "#21A469" }}
              isLocked={true}
            >
              <Block uid="6"
                isOpen={blockState["b6"].isOpen}
                handlePressToggle={() => toggleBlockOpen("b6", setBlockState)}
                rawContent={blockState["b6"].rawContent}
                renderedContent={blockState["b6"].renderedContent}
                presentUser={null}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </>
  )
};
