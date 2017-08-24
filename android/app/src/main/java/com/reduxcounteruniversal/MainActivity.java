package com.reduxcounteruniversal;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript.
     * link: https://github.com/crazycodeboy/react-native-splash-screen
     */
    // @Override
    // protected void onCreate(Bundle savedInstanceState) {
    //     SplashScreen.show(this);  // here
    //     super.onCreate(savedInstanceState);
    // }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReduxCounterUniversal";
    }
}
