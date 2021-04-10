import { Microphone } from '../../model/Microphone';

export interface IndexProps {
  microphones: Microphone[];
}

export default function index({ microphones }: IndexProps) {
  return <div>Test {microphones}</div>;
}
