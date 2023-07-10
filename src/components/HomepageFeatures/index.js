import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import modeler_gif from "../../../static/img/modeler.gif";
import forms_gif from "../../../static/img/forms.gif";
import Link from "@docusaurus/Link";

const FeatureList = [{
    title: 'Integrated Development Environment for Processes',
    Svg: require('/static/img/dev_process.svg').default,
    description: (<>
        One IDE for everything! With our Visual Studio Code plugins you no longer need to access an external
        modeler. Edit, manage and access all artifacts for your process application in one place.
    </>),
}, {
    title: 'Avoiding Infrastructure Coupling', Svg: require('/static/img/integration.svg').default, description: (<>
        Miranum-Connect enables you to create reusable integrations without getting locked into any vendor
        environments. We want to rely on pro-code instead of low-code, enabling you to build a sustainable and
        clean architecture.
    </>),
}, {
    title: 'Ready for the Future', Svg: require('/static/img/c7_to_c8.svg').default, description: (<>
        By being technology neutral you are set up for success when migrating to a newer version of your
        infrastructure components. E.g. whether you use Camunda Platform 7 or 8 does not make any difference!
    </>),
}];

function Feature({Svg, title, description}) {
    return (<div className={clsx('col col--4')}>
        <div className="text--center">
            <Svg className={styles.featureSvg} role="img"/>
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>);
}

const miranumWorkerCode = `
@Worker(type = "sendMessage")
public Answer sendMessage(SendMessageCommand sendMessageCommand) {
    // ...
    return answer;
}`;

const miranumMessageCode = `
@RequiredArgsConstructor
class Service {
    private final MessageApi messageApi;
    
    public void correlateMessage(CorrelateMessageCommand correlateMessageCommand) {
        messageApi.correlateMessage(correlateMessageCommand);
    }
}
`;

const ApplicationWindowWithDescription = ({children, description, className}) => {
    return (<div className={clsx(styles.blockContainer, className)}>
        <div className={styles.applicationWindow}>
            <div className={styles.applicationMenuBar}>
                <div className={clsx(styles.xButton, styles.red)}></div>
                <div className={clsx(styles.xButton, styles.orange)}></div>
                <div className={clsx(styles.xButton, styles.green)}></div>
            </div>
            {children}
        </div>
        <p className={styles.description}>{description}</p>
    </div>);
};

const CodeBlockWithDescription = ({description, code, language, className}) => {
    return (<ApplicationWindowWithDescription
        className={className}
        children={<CodeBlock className={clsx('language-' + language)}>
            {code}
        </CodeBlock>}
        description={description}>
    </ApplicationWindowWithDescription>);
};

const GifWithDescription = ({src, description}) => {
    return (<ApplicationWindowWithDescription
        children={<img className={styles.gif} src={src} alt="gif-player"/>}
        description={description}>
    </ApplicationWindowWithDescription>);
};

const ShowCaseSection = ({title, subtitleText, footerText, children}) => {
    return (<section>
        <div className={styles.heading}>
            <h1>{title}</h1>
            <p>{subtitleText}</p>
        </div>
        {children}
        <p className={styles.sectionFooter}>{footerText}</p>
    </section>);
}

export default function HomepageFeatures() {
    return (<div>
        <ShowCaseSection title="Model your process with the Miranum IDE"
                         subtitleText="Miranum IDE is a collection of VS Code Plugins that allows you to edit,
                             manage and access all artifacts for your process application in one place."
                         footerText="To create end-to-end process application a collaboration platform for various
                             technical and non-technical roles is needed. Since processes need multiple artifacts like
                             templates (forms, mails, PDF), workflow assets (BPMN, DMN) and configuration files (secrets,
                              connectors) we see the growing need for a platform being capable of handling all of them.
                              With Visual Studio Code developers are able to work in a familiar environment. Even non-technical
                              personas are able to visit VS Code through the browser and do not need to fear any technical complexity. ">
            <GifWithDescription src={modeler_gif}
                                description="Miranum Modeler is one of the core components of our VS Code Plugins. It allows you to model BPMN 2.0 diagrams that can be used within Camunda. Besides, it supports the creation of DMN 1.3 diagrams.">
            </GifWithDescription>
        </ShowCaseSection>

        <ShowCaseSection title="Create engine-neutral worker definitions"
                         subtitleText="A job worker is a service capable of performing a particular task in a process,
                              typically being written in Java. With Miranum-Connect developers are empowered to build reusable
                               and technology neutral connectors and integrations."
                         footerText="Miranum-connect supports Camunda element templates as well. These are building
                             blocks that simplify the process of designing and implementing processes in the Camunda Platform.
                              They are used to standardize and streamline the modeling process by providing predefined elements
                              with pre-configured properties, which can be easily customized to meet specific business requirements.">
            <CodeBlockWithDescription code={miranumWorkerCode}
                                      language="java"
                                      description="This is a technology neutral worker implementation for a job of type “send-message”. Due to the miranum-connect abstraction layer it works with various process engines such as Camunda Platform 7, 8 as well as Flowable. ">
            </CodeBlockWithDescription>
        </ShowCaseSection>

        <ShowCaseSection title="Create custom forms"
                         subtitleText="Forms are digital interfaces used to collect and organize information from users in processes.
                          They play a vital role in automating workflows and ensuring compliance. Forms streamline processes,
                          reduce errors, and enhance efficiency, making them essential for effective business operations."
                         footerText="While designing Forms, collaboration is key! Through the Live Share plugin for VS Code
                         a real-time collaboration is easily possible. Empowering Business and IT to work even closer together.
                          Once having desinged these forms, you can reference them in the required process. ">
            <GifWithDescription src={forms_gif}
                                description="Miranum JSON Forms is another key-component of our VS Code Plugins. It allows you to create and edit complex forms using JSONForms, which is based on JSON Schema, a specification for annotating and validating JSON documents.">
            </GifWithDescription>
        </ShowCaseSection>

        <ShowCaseSection title="Correlate a message"
                         subtitleText="Message correlation is a crucial aspect of processes, as it involves associating incoming
                         messages with a process instance. It ensures that responses are properly linked to the corresponding requests,
                          enabling seamless communication and coordination among participants and systems.">
            <CodeBlockWithDescription code={miranumMessageCode}
                                      className={styles.correlateMessageCode}
                                      language="java"
                                      description="By using miranum-connect’s message api you can correlate messages in multiple process-engines such as Camunda 7, 8 and Flowable.">
            </CodeBlockWithDescription>
        </ShowCaseSection>

        <section className={styles.features}>
            <h1>Your benefits</h1>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (<Feature key={idx} {...props} />))}
                </div>
            </div>
        </section>

        <div className={styles.contribution}>
            <img src={'img/logo.svg'} alt="miranum-logo"/>
            <h1>Welcome to the Miranum community</h1>
            <Link
                className="button button--secondary button--lg"
                to="/docs/components/components-overview">
                Get Started
            </Link>
        </div>
    </div>);
}