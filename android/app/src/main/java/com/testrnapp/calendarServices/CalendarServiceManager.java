package com.testrnapp.calendarServices; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class CalendarServiceManager extends ReactContextBaseJavaModule {
    CalendarServiceManager(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarServiceManager";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarServiceManager", "Create event called with name: " + name + " and location: " + location);
    }
}