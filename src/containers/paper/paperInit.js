import { PaperScope } from 'paper/dist/paper-full';

const init = () => {
  const paper = new PaperScope();
  paper.setup('myCanvas');
};

export default init;
