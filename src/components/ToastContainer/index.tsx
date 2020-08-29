import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info">
        <FiAlertCircle />

        <div>
          <strong>Aconteceu um erro...</strong>
          <p>Não foi possivel fazer o login</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error">
        <FiAlertCircle />

        <div>
          <strong>Aconteceu um erro...</strong>
          <p>Não foi possivel fazer o login</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success">
        <FiAlertCircle />

        <div>
          <strong>Aconteceu um erro...</strong>
          <p>Não foi possivel fazer o login</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
