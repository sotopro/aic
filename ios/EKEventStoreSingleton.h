//
//  KEventStoreSingleton.h
//  aic
//
//  Created by Daniel Soto on 16/01/24.
//

#ifndef EKEventStoreSingleton_h
#define EKEventStoreSingleton_h
#import <EventKit/EventKit.h>

@interface EKEventStoreSingleton : NSObject {
}


+ (EKEventStore *)getInstance;

@end

#endif /* EKEventStoreSingleton_h */
