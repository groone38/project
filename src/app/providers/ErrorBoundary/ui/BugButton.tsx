import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface IBugButton {
  className?: string;
}

export const BugButton = ({ className }: IBugButton) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>Throw error</Button>;
};
