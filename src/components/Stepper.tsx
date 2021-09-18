import React, {useState} from 'react';
import { Grid } from '@material-ui/core'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Profile from './Profile';
import '../css/stepper.css'
import { useForm, FormProvider } from "react-hook-form";


function getSteps() {
  return [
      'プロフィール',
      '住所',
      '連絡先'
  ];
}

function getStepContent(stepIndex: number) {
  let isProfileNone = true;
  let isAddress = true;
  let isAccess = true
  switch (stepIndex) {
      case 0:
          isProfileNone = false;
          isAddress = true;
          isAccess = true
          break;
      case 1:
          isProfileNone = true;
          isAddress = false;
          isAccess = true;
          break;
      case 2:
        isProfileNone = true;
        isAddress = true;
        isAccess = false
        break;
      default:
          return 'Unknown stepIndex';

        }
    console.log(isProfileNone);
    return (
        <>
            <Profile isProfileNull={isProfileNone} />
            フォーム　2 のコンテンツを表示
            フォーム　3 のコンテンツを表示
        </>
    )
}





function Content() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
      setActiveStep(0);
  };

  const methods = useForm();

  
  return (
      <FormProvider {...methods}>
        <Grid container className="stepper">
            <Grid sm={2}/>
            <Grid lg={8} sm={8} spacing={10}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <div className="form">
                        <Typography >全ステップの表示を完了</Typography>
                        <Button onClick={handleReset}>リセット</Button>
                    </div>
                ) : (
                    <div className="form">
                        <Typography >{getStepContent(activeStep)}</Typography>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            戻る
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? '送信' : '次へ'}
                        </Button>
                    </div>
                )}
            </Grid>
        </Grid>
      </FormProvider>
  )
}

export default Content;